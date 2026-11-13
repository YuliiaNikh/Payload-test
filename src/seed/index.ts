import {
  commitTransaction,
  createLocalReq,
  initTransaction,
  killTransaction,
  type CollectionSlug,
  type Payload,
  type PayloadRequest,
} from 'payload'

import { richText } from '@/utilities/richText'

import { avatarImage, logoImage, placeholderImage } from './images'

// Bump when the demo content changes; a site already at this version is left alone
export const DEMO_SEED_VERSION = 3

type Data = Record<string, unknown>
type Ref = { id: number }

// One at a time: uploads and queries share one transaction request, and parallel uploads
// on a shared request overwrite each other's file data
async function inOrder<T, R>(items: T[], fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = []
  for (const [i, item] of items.entries()) results.push(await fn(item, i))
  return results
}

const day = 86_400_000
const daysFromNow = (days: number, hour = 10) => {
  const date = new Date(Date.now() + days * day)
  date.setUTCHours(hour, 0, 0, 0)
  return date.toISOString()
}
const link = (relationTo: string, value: number, label: string, appearance = 'primary') => ({
  type: 'reference',
  reference: { relationTo, value },
  label,
  appearance,
})
const url = (href: string, label: string, appearance = 'primary') => ({
  type: 'custom',
  url: href,
  label,
  appearance,
})
const style = (background = 'default', spacing = 'md', align = 'start') => ({
  background,
  spacing,
  align,
})

export async function seedDemo(
  payload: Payload,
  { force = false }: { force?: boolean } = {},
): Promise<'seeded' | 'skipped'> {
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  const current = force ? 0 : (settings.demoSeed ?? 0)
  if (current >= DEMO_SEED_VERSION) return 'skipped'

  // All or nothing: a failure part-way leaves no half-seeded site behind (uploaded files may remain)
  const req = await createLocalReq({}, payload)
  await initTransaction(req)
  try {
    if (current < 1) await seedContent(payload, req)
    // Upgrades only add to what is there, so editors' changes survive
    if (current < 2) await upgradeTo2(payload, req)
    if (current < 3) await upgradeTo3(payload, req)
    await payload.updateGlobal({
      slug: 'site-settings',
      data: { demoSeed: DEMO_SEED_VERSION },
      req,
    })
    await commitTransaction(req)
    return 'seeded'
  } catch (error) {
    await killTransaction(req)
    throw error
  }
}

async function seedContent(payload: Payload, req: PayloadRequest): Promise<void> {
  const log = (message: string) => payload.logger.info(`[seed] ${message}`)

  // Create in English, then add the Hebrew version (omit `he` for English-only content)
  async function make(
    collection: CollectionSlug,
    en: Data,
    he?: Data,
    opts: { publish?: boolean } = {},
  ): Promise<Ref> {
    const publish = opts.publish ?? true
    const status = publish ? { _status: 'published' } : {}
    const doc = (await payload.create({
      req,
      collection,
      locale: 'en',
      data: { ...en, ...status } as never,
      ...(publish ? {} : { draft: true }),
      context: { seeding: true },
    })) as Ref
    if (he) {
      await payload.update({
        req,
        collection,
        id: doc.id,
        locale: 'he',
        data: { ...he, ...status } as never,
        ...(publish ? {} : { draft: true }),
        context: { seeding: true },
      })
    }
    return doc
  }

  // Taxonomy terms have no drafts
  async function term(
    collection: CollectionSlug,
    en: string,
    he: string,
    extra: Data = {},
  ): Promise<Ref> {
    const doc = (await payload.create({
      req,
      collection,
      locale: 'en',
      data: { title: en, ...extra } as never,
    })) as Ref
    await payload.update({
      req,
      collection,
      id: doc.id,
      locale: 'he',
      data: { title: he } as never,
    })
    return doc
  }

  async function image(
    label: string,
    index: number,
    alt: string,
    kind: 'photo' | 'avatar' | 'logo' = 'photo',
  ): Promise<Ref> {
    const data =
      kind === 'avatar'
        ? await avatarImage(label, index)
        : kind === 'logo'
          ? await logoImage(label)
          : await placeholderImage(label, index)
    const name = `demo-${kind}-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}.png`
    return (await payload.create({
      req,
      collection: 'media',
      data: { alt },
      file: { data, mimetype: 'image/png', name, size: data.length },
    })) as Ref
  }

  log('URL bases and site name')
  await payload.updateGlobal({
    req,
    slug: 'site-settings',
    locale: 'en',
    data: {
      siteName: 'Northwind',
      seo: {
        titlePattern: '%title% | Northwind',
        description: 'Payment and analytics tools for modern retail.',
      },
    },
  })
  await payload.updateGlobal({
    req,
    slug: 'site-settings',
    locale: 'he',
    data: {
      siteName: 'נורת׳ווינד',
      seo: {
        titlePattern: '%title% | נורת׳ווינד',
        description: 'כלי תשלום ואנליטיקה לקמעונאות מודרנית.',
      },
      cptBases: {
        posts: 'בלוג',
        events: 'אירועים',
        resources: 'משאבים',
        glossary: 'מילון',
        people: 'צוות',
      },
    },
  })

  log('images')
  const photos = await inOrder(
    ['Payments', 'Analytics', 'Retail', 'Team', 'Events', 'Guide', 'Report', 'Kiosk'],
    (label, i) => image(label, i, `${label} illustration`),
  )
  const [imgPayments, imgAnalytics, imgRetail, imgTeam, imgEvents, imgGuide, imgReport, imgKiosk] =
    photos
  const logos = await inOrder(
    ['Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Vandelay'],
    (name, i) => image(name, i, `${name} logo`, 'logo'),
  )

  log('taxonomies')
  const catNews = await term('categories', 'News', 'חדשות')
  const catProduct = await term('categories', 'Product', 'מוצר')
  const catCompany = await term('categories', 'Company', 'החברה')
  const catCulture = await term('categories', 'Culture', 'תרבות', { parent: catCompany.id })
  const tags = await inOrder(
    [
      ['AI', 'בינה מלאכותית'],
      ['Payments', 'תשלומים'],
      ['Retail', 'קמעונאות'],
      ['Sustainability', 'קיימות'],
    ],
    ([en, he]) => term('tags', en, he),
  )
  const [tagAI, tagPayments, tagRetail, tagSustainability] = tags
  const [typeWebinar, typeConference, typeMeetup] = await inOrder(
    [
      ['Webinar', 'וובינר'],
      ['Conference', 'כנס'],
      ['Meetup', 'מפגש'],
    ],
    ([en, he]) => term('event-types', en, he),
  )
  const [indRetail, indHospitality, indHealthcare] = await inOrder(
    [
      ['Retail', 'קמעונאות'],
      ['Hospitality', 'אירוח'],
      ['Healthcare', 'בריאות'],
    ],
    ([en, he]) => term('industries', en, he),
  )
  const [rtCase, rtGuide, rtVideo] = await inOrder(
    [
      ['Case study', 'סיפור לקוח'],
      ['Guide', 'מדריך'],
      ['Video', 'וידאו'],
    ],
    ([en, he]) => term('resource-types', en, he),
  )
  const [topPayments, topAnalytics, topSecurity] = await inOrder(
    [
      ['Payments', 'תשלומים'],
      ['Analytics', 'אנליטיקה'],
      ['Security', 'אבטחה'],
    ],
    ([en, he]) => term('topics', en, he),
  )
  const [depEng, depMarketing, depSales] = await inOrder(
    [
      ['Engineering', 'פיתוח'],
      ['Marketing', 'שיווק'],
      ['Sales', 'מכירות'],
    ],
    ([en, he]) => term('departments', en, he),
  )

  log('people')
  const peopleData: [string, string, string, string, Ref][] = [
    ['Dana Levi', 'דנה לוי', 'Head of Engineering', 'ראש צוות פיתוח', depEng],
    ['Omar Haddad', 'עומר חדאד', 'Product Marketing Lead', 'מוביל שיווק מוצר', depMarketing],
    ['Maya Cohen', 'מאיה כהן', 'Senior Engineer', 'מהנדסת בכירה', depEng],
    ['Lior Ben-David', 'ליאור בן דוד', 'Account Executive', 'מנהל לקוחות', depSales],
    ['Noa Friedman', 'נועה פרידמן', 'Content Lead', 'מובילת תוכן', depMarketing],
    ['Yossi Mizrahi', 'יוסי מזרחי', 'Solutions Engineer', 'מהנדס פתרונות', depSales],
  ]
  const people: Ref[] = []
  for (const [i, [en, he, jobEn, jobHe, dep]] of peopleData.entries()) {
    const initials = en
      .split(/[\s-]+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
    const photo = await image(initials, i, en, 'avatar')
    people.push(
      await make(
        'people',
        {
          title: en,
          jobTitle: jobEn,
          department: dep.id,
          featuredImage: photo.id,
          excerpt: `${en} works on ${jobEn.toLowerCase()} at Northwind.`,
          content: richText(
            `${en.split(' ')[0]} joined Northwind to help retailers take payments anywhere.`,
            'Outside work: hiking, coffee and open source.',
          ),
        },
        {
          title: he,
          jobTitle: jobHe,
          excerpt: `${he}, ${jobHe} בנורת׳ווינד.`,
          content: richText(
            `${he.split(' ')[0]} הצטרף/ה לנורת׳ווינד כדי לעזור לקמעונאים לגבות תשלומים בכל מקום.`,
          ),
        },
      ),
    )
  }
  const [dana, omar, maya, lior, noa, yossi] = people

  log('blog posts')
  const posts: {
    en: string
    he?: string
    cats: Ref[]
    tags: Ref[]
    author: Ref
    img: Ref
    ago: number
  }[] = [
    {
      en: 'Northwind raises Series B to expand in Europe',
      he: 'נורת׳ווינד מגייסת סבב B להתרחבות באירופה',
      cats: [catNews, catCompany],
      tags: [tagPayments],
      author: omar,
      img: imgReport,
      ago: 2,
    },
    {
      en: 'Introducing tap-to-pay on any tablet',
      he: 'חדש: תשלום בהצמדה בכל טאבלט',
      cats: [catProduct],
      tags: [tagPayments, tagRetail],
      author: dana,
      img: imgPayments,
      ago: 6,
    },
    {
      en: 'How AI spots fraud before checkout',
      he: 'איך בינה מלאכותית מזהה הונאות לפני התשלום',
      cats: [catProduct],
      tags: [tagAI],
      author: maya,
      img: imgAnalytics,
      ago: 12,
    },
    {
      en: 'Five retail trends for the holiday season',
      he: 'חמש מגמות בקמעונאות לעונת החגים',
      cats: [catNews],
      tags: [tagRetail],
      author: noa,
      img: imgRetail,
      ago: 18,
    },
    {
      en: 'Our hybrid week: how the team works',
      he: 'השבוע ההיברידי שלנו: איך הצוות עובד',
      cats: [catCulture],
      tags: [],
      author: noa,
      img: imgTeam,
      ago: 25,
    },
    {
      en: 'Unattended kiosks that never sleep',
      he: 'קיוסקים בשירות עצמי שלא נחים לרגע',
      cats: [catProduct],
      tags: [tagRetail],
      author: yossi,
      img: imgKiosk,
      ago: 33,
    },
    {
      en: 'Greener receipts: going paperless',
      he: 'קבלות ירוקות: מעבר לנייר אפס',
      cats: [catNews],
      tags: [tagSustainability],
      author: lior,
      img: imgGuide,
      ago: 41,
    },
    {
      en: 'Engineering notes: scaling our ledger',
      cats: [catCulture, catProduct],
      tags: [tagAI],
      author: dana,
      img: imgAnalytics,
      ago: 52,
    },
    {
      en: 'Partner spotlight: Acme Markets',
      cats: [catNews],
      tags: [tagRetail],
      author: lior,
      img: imgRetail,
      ago: 60,
    },
    {
      en: 'What PCI DSS 4.0 means for small shops',
      cats: [catProduct],
      tags: [tagPayments],
      author: maya,
      img: imgPayments,
      ago: 75,
    },
  ]
  for (const post of posts) {
    await make(
      'posts',
      {
        title: post.en,
        excerpt: `${post.en}. A short summary that appears on cards and in search results.`,
        publishedDate: daysFromNow(-post.ago),
        categories: post.cats.map((c) => c.id),
        tags: post.tags.map((t) => t.id),
        author: post.author.id,
        featuredImage: post.img.id,
        content: richText(
          'Retailers told us the same thing again and again: checkout should be the easiest part of the visit.',
          '## What changes',
          '- Faster checkout at the counter\n- One dashboard for every location\n- Reports your accountant will like',
          'Questions? Our team is happy to show you around.',
        ),
      },
      post.he
        ? {
            title: post.he,
            excerpt: `${post.he}. תקציר קצר שמופיע בכרטיסים ובתוצאות החיפוש.`,
            content: richText(
              'קמעונאים אמרו לנו שוב ושוב: התשלום צריך להיות החלק הקל ביותר בביקור.',
              '## מה משתנה',
              '- קופה מהירה יותר\n- לוח בקרה אחד לכל הסניפים\n- דוחות שרואה החשבון יאהב',
            ),
          }
        : undefined,
    )
  }

  log('events')
  const events: {
    en: string
    he: string
    type: Ref
    days: number
    loc: [string, string]
    speakers: Ref[]
  }[] = [
    {
      en: 'Payments Summit 2026',
      he: 'כנס התשלומים 2026',
      type: typeConference,
      days: 21,
      loc: ['Tel Aviv Expo', 'גני התערוכה, תל אביב'],
      speakers: [dana, omar],
    },
    {
      en: 'Webinar: Fraud prevention with AI',
      he: 'וובינר: מניעת הונאות עם בינה מלאכותית',
      type: typeWebinar,
      days: 9,
      loc: ['Online', 'אונליין'],
      speakers: [maya],
    },
    {
      en: 'Retail Tech Meetup',
      he: 'מפגש טכנולוגיה לקמעונאות',
      type: typeMeetup,
      days: 45,
      loc: ['Haifa', 'חיפה'],
      speakers: [yossi, lior],
    },
    {
      en: 'Webinar: Going paperless',
      he: 'וובינר: מעבר ללא נייר',
      type: typeWebinar,
      days: -12,
      loc: ['Online', 'אונליין'],
      speakers: [noa],
    },
    {
      en: 'Hospitality Forum',
      he: 'פורום האירוח',
      type: typeConference,
      days: -40,
      loc: ['Jerusalem', 'ירושלים'],
      speakers: [omar, lior],
    },
    {
      en: 'Engineering Open House',
      he: 'יום פתוח בפיתוח',
      type: typeMeetup,
      days: -70,
      loc: ['Tel Aviv office', 'משרדי תל אביב'],
      speakers: [dana, maya],
    },
  ]
  for (const event of events) {
    await make(
      'events',
      {
        title: event.en,
        excerpt: `Join us for ${event.en.toLowerCase()}.`,
        startDate: daysFromNow(event.days, 9),
        endDate: daysFromNow(event.days, 17),
        location: event.loc[0],
        eventTypes: [event.type.id],
        speakers: event.speakers.map((p) => p.id),
        featuredImage: imgEvents.id,
        content: richText(
          'A practical session with time for questions.',
          '## Agenda',
          '- Welcome and coffee\n- Talks\n- Networking',
        ),
        // Shown only while the event is still ahead (field condition)
        layout: [
          {
            blockType: 'cta',
            heading: 'Save your seat',
            text: 'Registration is free; places are limited.',
            links: [{ link: url('#register', 'Register') }],
            style: style('accent', 'md', 'center'),
            vis: {
              match: 'all',
              rules: [{ type: 'field', field_name: 'startDate', field_operator: 'future' }],
            },
          },
        ],
      },
      {
        title: event.he,
        excerpt: `הצטרפו אלינו: ${event.he}.`,
        location: event.loc[1],
        content: richText('מפגש מעשי עם זמן לשאלות.'),
        layout: [
          {
            blockType: 'cta',
            heading: 'שריינו מקום',
            text: 'ההרשמה חינמית; מספר המקומות מוגבל.',
            links: [{ link: url('#register', 'להרשמה') }],
            style: style('accent', 'md', 'center'),
            vis: {
              match: 'all',
              rules: [{ type: 'field', field_name: 'startDate', field_operator: 'future' }],
            },
          },
        ],
      },
    )
  }

  log('resources')
  const resources: { en: string; he: string; type: Ref; ind: Ref[]; top: Ref[]; img: Ref }[] = [
    {
      en: 'How Acme cut checkout time by 40%',
      he: 'איך אקמה קיצרה את זמן הקופה ב־40%',
      type: rtCase,
      ind: [indRetail],
      top: [topPayments],
      img: imgRetail,
    },
    {
      en: 'Hotel chain unifies payments in 30 sites',
      he: 'רשת מלונות מאחדת תשלומים ב־30 אתרים',
      type: rtCase,
      ind: [indHospitality],
      top: [topPayments, topAnalytics],
      img: imgKiosk,
    },
    {
      en: 'Clinic billing without the paperwork',
      he: 'גבייה במרפאות בלי ניירת',
      type: rtCase,
      ind: [indHealthcare],
      top: [topPayments],
      img: imgGuide,
    },
    {
      en: 'Guide: Choosing a payment terminal',
      he: 'מדריך: בחירת מסוף תשלום',
      type: rtGuide,
      ind: [indRetail, indHospitality],
      top: [topPayments],
      img: imgPayments,
    },
    {
      en: 'Guide: Reading your sales dashboard',
      he: 'מדריך: קריאת לוח המכירות',
      type: rtGuide,
      ind: [indRetail],
      top: [topAnalytics],
      img: imgAnalytics,
    },
    {
      en: 'Guide: PCI compliance checklist',
      he: 'מדריך: רשימת תאימות PCI',
      type: rtGuide,
      ind: [indRetail, indHealthcare],
      top: [topSecurity],
      img: imgReport,
    },
    {
      en: 'Video: Setting up tap-to-pay',
      he: 'וידאו: הגדרת תשלום בהצמדה',
      type: rtVideo,
      ind: [indRetail],
      top: [topPayments],
      img: imgPayments,
    },
    {
      en: 'Video: Fraud rules in five minutes',
      he: 'וידאו: חוקי הונאה בחמש דקות',
      type: rtVideo,
      ind: [indHospitality],
      top: [topSecurity],
      img: imgAnalytics,
    },
    {
      en: 'Video: Multi-site reporting tour',
      he: 'וידאו: סיור בדוחות רב־סניפיים',
      type: rtVideo,
      ind: [indHealthcare, indHospitality],
      top: [topAnalytics],
      img: imgTeam,
    },
  ]
  for (const r of resources) {
    await make(
      'resources',
      {
        title: r.en,
        excerpt: 'A practical resource from the Northwind team.',
        resourceType: r.type.id,
        industries: r.ind.map((t) => t.id),
        topics: r.top.map((t) => t.id),
        featuredImage: r.img.id,
        externalUrl: 'https://example.com/resource',
        content: richText('Everything you need to know, in one place.'),
      },
      {
        title: r.he,
        excerpt: 'משאב מעשי מצוות נורת׳ווינד.',
        content: richText('כל מה שצריך לדעת, במקום אחד.'),
      },
    )
  }

  log('glossary')
  const glossary: [string, string | null, string][] = [
    ['Acquirer', 'בנק סולק', 'The bank that processes card payments for a merchant.'],
    ['Authorization', 'הרשאה', 'Approval from the card issuer that funds are available.'],
    ['Chargeback', 'החזר חיוב', 'A payment reversed by the card issuer after a dispute.'],
    ['Contactless', 'ללא מגע', 'Paying by tapping a card or phone on the terminal.'],
    ['EMV', 'EMV', 'The chip-card standard used worldwide.'],
    ['Interchange fee', 'עמלה צולבת', 'The fee paid between banks for each card transaction.'],
    ['Merchant account', 'חשבון סוחר', 'An account that lets a business accept card payments.'],
    ['PCI DSS', 'PCI DSS', 'Security rules for companies that handle card data.'],
    ['Point of sale', 'נקודת מכירה', 'Where and how a sale is completed.'],
    ['Settlement', 'סליקה', 'Moving funds from the customer’s bank to the merchant.'],
    ['Tokenization', 'טוקניזציה', 'Replacing card numbers with safe stand-in values.'],
    ['Unattended payments', null, 'Payments at machines with no staff present, such as kiosks.'],
    ['Void', null, 'Cancelling a transaction before it settles.'],
    ['3-D Secure', null, 'An extra check that confirms online card payments.'],
  ]
  for (const [en, he, definition] of glossary) {
    await make(
      'glossary',
      { title: en, excerpt: definition, content: richText(definition) },
      he ? { title: he, excerpt: definition, content: richText(definition) } : undefined,
    )
  }

  log('reusable sections')
  const newsletter = await make(
    'reusable-sections',
    {
      title: 'Newsletter CTA',
      layout: [
        {
          blockType: 'cta',
          heading: 'Get the monthly retail brief',
          text: 'One email a month with product news and retail insights.',
          links: [{ link: url('#newsletter', 'Subscribe') }],
          style: style('dark', 'md', 'center'),
        },
      ],
    },
    {
      layout: [
        {
          blockType: 'cta',
          heading: 'הצטרפו לעדכון החודשי',
          text: 'מייל אחד בחודש עם חדשות מוצר ותובנות מהקמעונאות.',
          links: [{ link: url('#newsletter', 'הרשמה') }],
          style: style('dark', 'md', 'center'),
        },
      ],
    },
  )

  log('pages')
  // CPT archive page: slug = the CPT's URL base in each language, so term archives (/blog/category/x) find it
  const archive = async (
    en: [string, string],
    he: [string, string],
    listing: Data,
    heHeading: string,
    heSlug: string,
  ) =>
    make(
      'pages',
      {
        title: en[0],
        slug: en[0].toLowerCase(),
        template: 'archive',
        layout: [
          {
            blockType: 'hero',
            heading: en[0],
            text: en[1],
            variant: 'centered',
            style: style('surface', 'sm', 'center'),
          },
          { blockType: 'listing', ...listing },
        ],
      },
      {
        title: he[0],
        slug: heSlug,
        layout: [
          {
            blockType: 'hero',
            heading: he[0],
            text: he[1],
            variant: 'centered',
            style: style('surface', 'sm', 'center'),
          },
          { blockType: 'listing', ...listing, heading: heHeading },
        ],
      },
    )

  const blog = await archive(
    ['Blog', 'News, product updates and stories from the team.'],
    ['בלוג', 'חדשות, עדכוני מוצר וסיפורים מהצוות.'],
    {
      heading: 'Latest posts',
      collection: 'posts',
      filters: [
        { type: 'taxonomy', taxonomy: 'category', display: 'tabs' },
        { type: 'taxonomy', taxonomy: 'tag', display: 'select' },
        { type: 'person' },
        { type: 'search' },
        { type: 'sort' },
      ],
      cardStyle: 'standard',
      layout: 'grid3',
      paging: 'numbers',
      perPage: 6,
      defaultSort: 'newest',
    },
    'פוסטים אחרונים',
    'בלוג',
  )

  const eventsPage = await archive(
    ['Events', 'Webinars, conferences and meetups.'],
    ['אירועים', 'וובינרים, כנסים ומפגשים.'],
    {
      heading: 'All events',
      collection: 'events',
      filters: [{ type: 'date' }, { type: 'taxonomy', taxonomy: 'type', display: 'checkboxes' }],
      cardStyle: 'event',
      layout: 'list',
      paging: 'loadMore',
      perPage: 4,
      defaultSort: 'newest',
    },
    'כל האירועים',
    'אירועים',
  )

  const resourcesPage = await archive(
    ['Resources', 'Case studies, guides and videos.'],
    ['משאבים', 'סיפורי לקוח, מדריכים וסרטונים.'],
    {
      heading: 'Find a resource',
      collection: 'resources',
      filters: [
        { type: 'taxonomy', taxonomy: 'type', display: 'checkboxes' },
        { type: 'taxonomy', taxonomy: 'industry', display: 'checkboxes' },
        { type: 'taxonomy', taxonomy: 'topic', display: 'checkboxes' },
        { type: 'search' },
      ],
      cardStyle: 'horizontal',
      layout: 'grid2',
      paging: 'numbers',
      perPage: 6,
      defaultSort: 'az',
    },
    'חיפוש משאב',
    'משאבים',
  )

  const glossaryPage = await archive(
    ['Glossary', 'Payment terms in plain language.'],
    ['מילון', 'מונחי תשלום בשפה פשוטה.'],
    {
      heading: 'A–Z',
      collection: 'glossary',
      filters: [{ type: 'az' }, { type: 'search' }],
      cardStyle: 'compact',
      layout: 'list',
      paging: 'loadMore',
      perPage: 8,
      defaultSort: 'az',
    },
    'א–ת',
    'מילון',
  )

  const teamPage = await archive(
    ['People', 'The team behind Northwind.'],
    ['צוות', 'הצוות שמאחורי נורת׳ווינד.'],
    {
      heading: 'Our team',
      collection: 'people',
      filters: [{ type: 'taxonomy', taxonomy: 'department', display: 'tabs' }, { type: 'az' }],
      cardStyle: 'person',
      layout: 'grid4',
      paging: 'none',
      perPage: 24,
      defaultSort: 'az',
    },
    'הצוות שלנו',
    'צוות',
  )

  const about = await make(
    'pages',
    {
      title: 'About',
      slug: 'about',
      template: 'about',
      layout: [
        {
          blockType: 'hero',
          eyebrow: 'Since 2016',
          heading: 'We make checkout the easy part',
          text: 'Northwind builds payment and analytics tools for retailers of every size.',
          image: imgTeam.id,
          variant: 'split',
          style: style('default', 'lg'),
        },
        {
          blockType: 'stats',
          heading: 'Northwind in numbers',
          items: [
            { value: '12k', label: 'Merchants' },
            { value: '30', label: 'Countries' },
            { value: '99.99%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ],
          style: style('surface', 'md', 'center'),
        },
        {
          blockType: 'mediaText',
          heading: 'Built with retailers',
          content: richText(
            'Every feature starts on a shop floor. We visit stores, watch checkouts and ship what helps.',
          ),
          image: imgRetail.id,
          imagePosition: 'end',
          style: style(),
        },
        {
          blockType: 'listing',
          heading: 'Leadership',
          collection: 'people',
          cardStyle: 'person',
          layout: 'grid4',
          paging: 'none',
          perPage: 4,
          defaultSort: 'az',
          style: style('surface'),
        },
        { blockType: 'reusableSection', section: newsletter.id },
      ],
    },
    {
      title: 'אודות',
      slug: 'אודות',
      layout: [
        {
          blockType: 'hero',
          eyebrow: 'מאז 2016',
          heading: 'אנחנו הופכים את התשלום לחלק הקל',
          text: 'נורת׳ווינד בונה כלי תשלום ואנליטיקה לקמעונאים בכל גודל.',
          image: imgTeam.id,
          variant: 'split',
          style: style('default', 'lg'),
        },
        {
          blockType: 'stats',
          heading: 'נורת׳ווינד במספרים',
          items: [
            { value: '12K', label: 'בתי עסק' },
            { value: '30', label: 'מדינות' },
            { value: '99.99%', label: 'זמינות' },
            { value: '24/7', label: 'תמיכה' },
          ],
          style: style('surface', 'md', 'center'),
        },
        { blockType: 'reusableSection', section: newsletter.id },
      ],
    },
  )

  const contact = await make(
    'pages',
    {
      title: 'Contact',
      slug: 'contact',
      template: 'contact',
      layout: [
        {
          blockType: 'hero',
          heading: 'Talk to us',
          text: 'We usually reply within one working day.',
          variant: 'centered',
          style: style('surface', 'md', 'center'),
        },
        {
          blockType: 'columns',
          heading: 'Offices',
          columns: [
            {
              content: [
                {
                  blockType: 'colText',
                  content: richText('### Tel Aviv', 'Rothschild Blvd 1', 'Sun–Thu, 9:00–18:00'),
                },
              ],
            },
            {
              content: [
                {
                  blockType: 'colText',
                  content: richText('### London', '1 Example Street', 'Mon–Fri, 9:00–17:30'),
                },
              ],
            },
            {
              content: [
                { blockType: 'colImage', image: imgKiosk.id, caption: 'Our demo kiosk' },
                {
                  blockType: 'colButtons',
                  links: [{ link: url('mailto:hello@example.com', 'Email us', 'outline') }],
                },
              ],
            },
          ],
          style: style(),
        },
        {
          blockType: 'hubspotForm',
          heading: 'Send us a message',
          text: 'The form comes from HubSpot (portal ID in Site settings).',
          formId: 'demo-form-id',
          display: 'inline',
          style: style('surface'),
        },
        {
          blockType: 'faq',
          heading: 'Questions',
          items: [
            {
              question: 'How fast is onboarding?',
              answer: richText('Most merchants take their first payment within a week.'),
            },
            {
              question: 'Do you support multiple currencies?',
              answer: richText('Yes, over 30 currencies.'),
            },
          ],
          style: style(),
        },
      ],
    },
    {
      title: 'צור קשר',
      slug: 'צור-קשר',
      layout: [
        {
          blockType: 'hero',
          heading: 'דברו איתנו',
          text: 'בדרך כלל אנחנו עונים תוך יום עבודה.',
          variant: 'centered',
          style: style('surface', 'md', 'center'),
        },
        {
          blockType: 'hubspotForm',
          heading: 'שלחו הודעה',
          formId: 'demo-form-id-he',
          display: 'popup',
          buttonLabel: 'פתיחת הטופס',
          style: style('default', 'md', 'center'),
        },
        {
          blockType: 'faq',
          heading: 'שאלות',
          items: [
            {
              question: 'כמה זמן לוקח להתחיל?',
              answer: richText('רוב בתי העסק מקבלים תשלום ראשון תוך שבוע.'),
            },
          ],
          style: style(),
        },
      ],
    },
  )

  const solutions = await make(
    'pages',
    {
      title: 'Solutions',
      slug: 'solutions',
      layout: [
        {
          blockType: 'hero',
          heading: 'Solutions for every counter',
          text: 'Pick your industry to see how Northwind fits.',
          variant: 'centered',
          style: style('surface', 'md', 'center'),
        },
        {
          blockType: 'tabs',
          heading: 'By industry',
          tabs: [
            {
              label: 'Retail',
              content: richText('Fast checkout, inventory sync and loyalty in one place.'),
              image: imgRetail.id,
            },
            {
              label: 'Hospitality',
              content: richText('Table-side payments and split bills without the queue.'),
              image: imgKiosk.id,
            },
            {
              label: 'Healthcare',
              content: richText('Simple billing and secure card storage for clinics.'),
              image: imgGuide.id,
            },
          ],
          style: style(),
        },
        {
          blockType: 'cards',
          heading: 'Products',
          columns: '3',
          cardStyle: 'elevated',
          items: [
            { title: 'Terminals', text: 'Countertop and handheld devices.', image: imgPayments.id },
            { title: 'Online checkout', text: 'Hosted pages and APIs.', image: imgAnalytics.id },
            { title: 'Kiosks', text: 'Unattended self-service payments.', image: imgKiosk.id },
          ],
          style: style('surface'),
        },
      ],
    },
    {
      title: 'פתרונות',
      slug: 'פתרונות',
      layout: [
        {
          blockType: 'hero',
          heading: 'פתרונות לכל דלפק',
          text: 'בחרו תחום כדי לראות איך נורת׳ווינד מתאימה.',
          variant: 'centered',
          style: style('surface', 'md', 'center'),
        },
        {
          blockType: 'tabs',
          heading: 'לפי תחום',
          tabs: [
            {
              label: 'קמעונאות',
              content: richText('קופה מהירה, סנכרון מלאי ומועדון לקוחות במקום אחד.'),
              image: imgRetail.id,
            },
            {
              label: 'אירוח',
              content: richText('תשלום ליד השולחן ופיצול חשבון בלי תור.'),
              image: imgKiosk.id,
            },
          ],
          style: style(),
        },
      ],
    },
  )

  // Draft-only page to try previews and scheduling
  await make(
    'pages',
    { title: 'Pricing (draft)', slug: 'pricing', template: 'landing' },
    undefined,
    { publish: false },
  )

  const home = await make(
    'pages',
    {
      title: 'Home',
      slug: 'home',
      meta: {
        title: 'Northwind — payments and analytics for retail',
        description: 'Take payments anywhere and see every store in one dashboard.',
      },
      layout: [
        {
          blockType: 'cta',
          heading: 'Black Friday: 50% off terminals this week',
          links: [{ link: link('pages', contact.id, 'Claim the offer') }],
          style: style('accent', 'sm', 'center'),
          vis: {
            match: 'all',
            rules: [{ type: 'url', url_param: 'utm_campaign', url_value: 'bf' }],
          },
        },
        {
          blockType: 'hero',
          eyebrow: 'Payments + analytics',
          heading: 'Take payments anywhere. See every store in one place.',
          text: 'Terminals, online checkout and kiosks with one dashboard for all your locations.',
          image: imgPayments.id,
          variant: 'split',
          links: [
            { link: link('pages', contact.id, 'Book a demo') },
            { link: link('pages', solutions.id, 'Explore solutions', 'outline') },
          ],
          style: style('default', 'lg'),
        },
        {
          blockType: 'logos',
          heading: 'Trusted by teams at',
          logos: logos.map((logo, i) => ({
            name: ['Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Vandelay'][i],
            image: logo.id,
          })),
          style: style('default', 'sm', 'center'),
        },
        {
          blockType: 'cards',
          heading: 'Everything at the counter and beyond',
          intro: 'Pick what you need today and add more later.',
          columns: '3',
          cardStyle: 'outline',
          items: [
            {
              title: 'Solutions',
              text: 'See how it fits your industry.',
              image: imgRetail.id,
              link: link('pages', solutions.id, 'Explore'),
            },
            {
              title: 'Resources',
              text: 'Guides, case studies and videos.',
              image: imgGuide.id,
              link: link('pages', resourcesPage.id, 'Browse'),
            },
            {
              title: 'Events',
              text: 'Meet us online or in person.',
              image: imgEvents.id,
              link: link('pages', eventsPage.id, 'See dates'),
            },
          ],
          style: style('surface'),
        },
        {
          blockType: 'stats',
          items: [
            { value: '12k', label: 'Merchants' },
            { value: '4.2B', label: 'Payments a year' },
            { value: '30', label: 'Countries' },
          ],
          style: style('dark', 'md', 'center'),
        },
        {
          blockType: 'listing',
          heading: 'From the blog',
          collection: 'posts',
          cardStyle: 'standard',
          layout: 'slider',
          paging: 'none',
          perPage: 6,
          defaultSort: 'newest',
          style: style(),
        },
        {
          blockType: 'listing',
          heading: 'Upcoming events',
          collection: 'events',
          when: 'upcoming',
          cardStyle: 'event',
          layout: 'grid3',
          paging: 'none',
          perPage: 3,
          defaultSort: 'oldest',
          style: style('surface'),
          vis: {
            match: 'all',
            rules: [{ type: 'items', items_type: 'events', items_when: 'upcoming' }],
          },
        },
        {
          blockType: 'testimonials',
          heading: 'What merchants say',
          items: [
            {
              quote: 'Checkout lines are gone. Our staff finally talk to customers again.',
              name: 'Rina S.',
              role: 'Store manager, Acme Markets',
            },
            {
              quote: 'One report for 30 hotels. That alone paid for it.',
              name: 'David K.',
              role: 'CFO, Globex Hotels',
            },
            { quote: 'Setup took an afternoon.', name: 'Hila M.', role: 'Owner, Café Hooli' },
          ],
          style: style(),
        },
        { blockType: 'reusableSection', section: newsletter.id },
      ],
    },
    {
      title: 'בית',
      slug: 'בית',
      meta: {
        title: 'נורת׳ווינד — תשלומים ואנליטיקה לקמעונאות',
        description: 'גבו תשלומים בכל מקום וראו את כל הסניפים בלוח אחד.',
      },
      layout: [
        {
          blockType: 'hero',
          eyebrow: 'תשלומים + אנליטיקה',
          heading: 'גבו תשלומים בכל מקום. ראו את כל הסניפים במקום אחד.',
          text: 'מסופים, תשלום אונליין וקיוסקים עם לוח בקרה אחד לכל הסניפים.',
          image: imgPayments.id,
          variant: 'split',
          links: [
            { link: link('pages', contact.id, 'לתיאום הדגמה') },
            { link: link('pages', solutions.id, 'לפתרונות', 'outline') },
          ],
          style: style('default', 'lg'),
        },
        {
          blockType: 'stats',
          items: [
            { value: '12K', label: 'בתי עסק' },
            { value: '30', label: 'מדינות' },
          ],
          style: style('dark', 'md', 'center'),
        },
        {
          blockType: 'listing',
          heading: 'מהבלוג',
          collection: 'posts',
          cardStyle: 'standard',
          layout: 'grid3',
          paging: 'none',
          perPage: 3,
          defaultSort: 'newest',
          style: style(),
        },
        { blockType: 'reusableSection', section: newsletter.id },
      ],
    },
  )

  // A campaign landing page: minimal header, no footer, sections shown in a date window
  const minimalHeader = await make('headers', {
    title: 'Minimal header',
    variant: 'minimal',
    cta: url('#offer', 'Get the offer'),
    showLanguageSwitcher: false,
  })
  await make('pages', {
    title: 'Spring offer',
    slug: 'spring-offer',
    appearance: { header: 'custom', headerRef: minimalHeader.id, footer: 'none' },
    layout: [
      {
        blockType: 'hero',
        eyebrow: 'Limited time',
        heading: 'Three months of free processing',
        text: 'For new merchants who sign up this spring.',
        image: imgKiosk.id,
        variant: 'split',
        links: [{ link: link('pages', contact.id, 'Claim it') }],
        style: style('accent', 'lg'),
      },
      {
        blockType: 'faq',
        heading: 'The small print',
        items: [
          { question: 'Who can join?', answer: richText('New merchants in supported countries.') },
        ],
        style: style(),
      },
      {
        blockType: 'cta',
        heading: 'Last days! Offer ends soon',
        style: style('dark', 'sm', 'center'),
        vis: { match: 'all', rules: [{ type: 'date', date_from: daysFromNow(60) }] },
      },
      {
        blockType: 'cta',
        heading: 'Desktop visitors: book a live demo',
        style: style('surface', 'sm', 'center'),
        vis: { match: 'all', rules: [{ type: 'device', device_show: ['desktop'] }] },
      },
    ],
  })

  log('headers and footers')
  const ref = (id: number, label: string) => link('pages', id, label)
  const mainHeader = await make(
    'headers',
    {
      title: 'Main header',
      variant: 'default',
      cta: ref(contact.id, 'Book a demo'),
      menu: [
        {
          label: 'Solutions',
          type: 'mega',
          mega: {
            columns: [
              {
                heading: 'By industry',
                links: [
                  {
                    link: ref(solutions.id, 'Retail'),
                    description: 'Stores, chains and pop-ups',
                    icon: 'chart',
                  },
                  {
                    link: ref(solutions.id, 'Hospitality'),
                    description: 'Hotels, cafés and restaurants',
                    icon: 'users',
                  },
                  {
                    link: ref(solutions.id, 'Healthcare'),
                    description: 'Clinics and pharmacies',
                    icon: 'shield',
                  },
                ],
              },
              {
                heading: 'By product',
                links: [
                  {
                    link: ref(solutions.id, 'Terminals'),
                    description: 'Countertop and handheld',
                    icon: 'bolt',
                  },
                  {
                    link: ref(solutions.id, 'Online checkout'),
                    description: 'Hosted pages and APIs',
                    icon: 'globe',
                  },
                ],
              },
            ],
            auto: { enabled: true, heading: 'Latest news', collection: 'posts', count: 3 },
            promo: {
              enabled: true,
              image: imgReport.id,
              title: '2026 Retail Payments Report',
              text: 'Trends from 12,000 merchants.',
              link: ref(resourcesPage.id, 'Read the report'),
            },
            bottomLink: ref(solutions.id, 'All solutions'),
          },
        },
        {
          label: 'Resources',
          type: 'mega',
          mega: {
            columns: [
              {
                heading: 'Learn',
                links: [
                  {
                    link: ref(resourcesPage.id, 'Resource library'),
                    description: 'Guides, case studies, videos',
                    icon: 'book',
                  },
                  {
                    link: ref(glossaryPage.id, 'Glossary'),
                    description: 'Payment terms A–Z',
                    icon: 'chat',
                  },
                ],
              },
              {
                heading: 'Connect',
                links: [
                  {
                    link: ref(eventsPage.id, 'Events'),
                    description: 'Webinars and meetups',
                    icon: 'calendar',
                  },
                  { link: ref(blog.id, 'Blog'), description: 'News and stories', icon: 'star' },
                ],
              },
            ],
            auto: { enabled: true, heading: 'Upcoming events', collection: 'events', count: 2 },
          },
        },
        { label: 'Blog', type: 'link', link: ref(blog.id, 'Blog') },
        {
          label: 'Company',
          type: 'dropdown',
          links: [
            { link: ref(about.id, 'About') },
            { link: ref(teamPage.id, 'People') },
            { link: ref(contact.id, 'Contact') },
          ],
        },
      ],
    },
    {
      cta: ref(contact.id, 'לתיאום הדגמה'),
      menu: [
        { label: 'פתרונות', type: 'link', link: ref(solutions.id, 'פתרונות') },
        {
          label: 'משאבים',
          type: 'mega',
          mega: {
            columns: [
              {
                heading: 'ללמוד',
                links: [
                  {
                    link: ref(resourcesPage.id, 'ספריית משאבים'),
                    description: 'מדריכים, סיפורי לקוח וסרטונים',
                    icon: 'book',
                  },
                  {
                    link: ref(glossaryPage.id, 'מילון'),
                    description: 'מונחי תשלום מא׳ עד ת׳',
                    icon: 'chat',
                  },
                ],
              },
            ],
            auto: { enabled: true, heading: 'מהבלוג', collection: 'posts', count: 3 },
          },
        },
        { label: 'אירועים', type: 'link', link: ref(eventsPage.id, 'אירועים') },
        {
          label: 'החברה',
          type: 'dropdown',
          links: [
            { link: ref(about.id, 'אודות') },
            { link: ref(teamPage.id, 'צוות') },
            { link: ref(contact.id, 'צור קשר') },
          ],
        },
      ],
    },
  )
  await make('headers', {
    title: 'Transparent header',
    variant: 'transparent',
    cta: ref(contact.id, 'Book a demo'),
    menu: [{ label: 'Blog', type: 'link', link: ref(blog.id, 'Blog') }],
  })

  const mainFooter = await make(
    'footers',
    {
      title: 'Main footer',
      text: 'Northwind is a demo company used to evaluate Payload CMS.',
      columns: [
        {
          heading: 'Product',
          links: [{ link: ref(solutions.id, 'Solutions') }, { link: ref(contact.id, 'Pricing') }],
        },
        {
          heading: 'Learn',
          links: [
            { link: ref(blog.id, 'Blog') },
            { link: ref(resourcesPage.id, 'Resources') },
            { link: ref(glossaryPage.id, 'Glossary') },
            { link: ref(eventsPage.id, 'Events') },
          ],
        },
        {
          heading: 'Company',
          links: [
            { link: ref(about.id, 'About') },
            { link: ref(teamPage.id, 'People') },
            { link: ref(contact.id, 'Contact') },
          ],
        },
      ],
      social: [
        { platform: 'linkedin', url: 'https://www.linkedin.com' },
        { platform: 'youtube', url: 'https://www.youtube.com' },
      ],
      legal: '© 2026 Northwind (demo). All rights reserved.',
    },
    {
      text: 'נורת׳ווינד היא חברת הדגמה להערכת Payload CMS.',
      columns: [
        {
          heading: 'ללמוד',
          links: [
            { link: ref(blog.id, 'בלוג') },
            { link: ref(resourcesPage.id, 'משאבים') },
            { link: ref(glossaryPage.id, 'מילון') },
          ],
        },
        {
          heading: 'החברה',
          links: [
            { link: ref(about.id, 'אודות') },
            { link: ref(teamPage.id, 'צוות') },
            { link: ref(contact.id, 'צור קשר') },
          ],
        },
      ],
      legal: '© 2026 נורת׳ווינד (הדגמה). כל הזכויות שמורות.',
    },
  )
  await make('footers', { title: 'Simple footer', legal: '© 2026 Northwind' })

  log('item defaults')
  await payload.updateGlobal({
    req,
    slug: 'cpt-defaults',
    locale: 'en',
    data: {
      posts: {
        after: [
          {
            blockType: 'listing',
            heading: 'Related posts',
            collection: 'posts',
            relatedToCurrent: true,
            excludeCurrent: true,
            cardStyle: 'standard',
            layout: 'grid3',
            paging: 'none',
            perPage: 3,
            defaultSort: 'newest',
            style: style('surface'),
          },
          { blockType: 'reusableSection', section: newsletter.id },
        ],
      },
      events: {
        after: [
          {
            blockType: 'listing',
            heading: 'More events',
            collection: 'events',
            when: 'upcoming',
            excludeCurrent: true,
            cardStyle: 'event',
            layout: 'grid3',
            paging: 'none',
            perPage: 3,
            defaultSort: 'oldest',
            style: style('surface'),
          },
        ],
      },
      people: {
        after: [
          {
            blockType: 'listing',
            heading: 'Same department',
            collection: 'people',
            relatedToCurrent: true,
            excludeCurrent: true,
            cardStyle: 'person',
            layout: 'grid4',
            paging: 'none',
            perPage: 4,
            defaultSort: 'az',
            style: style('surface'),
          },
        ],
      },
    } as never,
  })
  await payload.updateGlobal({
    req,
    slug: 'cpt-defaults',
    locale: 'he',
    data: {
      posts: {
        after: [
          {
            blockType: 'listing',
            heading: 'פוסטים קשורים',
            collection: 'posts',
            relatedToCurrent: true,
            excludeCurrent: true,
            cardStyle: 'standard',
            layout: 'grid3',
            paging: 'none',
            perPage: 3,
            defaultSort: 'newest',
            style: style('surface'),
          },
          { blockType: 'reusableSection', section: newsletter.id },
        ],
      },
    } as never,
  })

  await payload.updateGlobal({
    req,
    slug: 'site-settings',
    data: {
      homePage: home.id,
      defaultHeader: mainHeader.id,
      defaultFooter: mainFooter.id,
      demoSeed: DEMO_SEED_VERSION,
    },
  })
  log('done')
}

type Block = Data & { blockType: string; id?: string }

// Row ids are unique across languages, so a copied block must drop every nested id
const withoutIds = (value: unknown): unknown =>
  Array.isArray(value)
    ? value.map(withoutIds)
    : value && typeof value === 'object'
      ? Object.fromEntries(
          Object.entries(value)
            .filter(([k]) => k !== 'id')
            .map(([k, v]) => [k, withoutIds(v)]),
        )
      : value

// v2: slider variants on the blog, logo marquee on the home page, more social icons
async function upgradeTo2(payload: Payload, req: PayloadRequest): Promise<void> {
  payload.logger.info('[seed] upgrade 2: sliders, marquee, social icons')
  const findPage = async (slug: string) =>
    (
      await payload.find({
        collection: 'pages',
        locale: 'en',
        depth: 0,
        limit: 1,
        where: { slug: { equals: slug } },
        req,
      })
    ).docs[0]
  const layoutOf = async (id: number, locale: 'en' | 'he') =>
    ((await payload.findByID({ collection: 'pages', id, locale, depth: 0, req })).layout ??
      []) as unknown as Block[]
  const save = (id: number, locale: 'en' | 'he', layout: Block[]) =>
    payload.update({
      collection: 'pages',
      id,
      locale,
      data: { layout, _status: 'published' } as never,
      req,
    })

  const slider = (
    heading: string,
    perView: string,
    options: Data,
    cardStyle = 'standard',
    extra: Data = {},
  ): Block => ({
    blockType: 'listing',
    heading,
    collection: 'posts',
    cardStyle,
    layout: 'slider',
    paging: 'none',
    perPage: 6,
    defaultSort: 'newest',
    slider: {
      perView,
      arrows: false,
      dots: false,
      autoplay: false,
      interval: 5,
      fullWidth: false,
      ...options,
    },
    style: style(),
    ...extra,
  })

  const blog = await findPage('blog')
  if (blog) {
    const variants = {
      en: [
        slider(
          '',
          '1',
          { arrows: true, dots: true, autoplay: true, interval: 6, fullWidth: true },
          'feature',
          { perPage: 4, style: style('default', 'none') },
        ),
        slider('Editor’s picks · 2 per view, dots', '2', { dots: true }, 'feature'),
        slider('Latest · 3 per view, arrows', '3', { arrows: true }),
        slider(
          'Quick reads · 4 per view, arrows + dots, autoplay',
          '4',
          { arrows: true, dots: true, autoplay: true, interval: 4 },
          'standard',
          { style: style('surface') },
        ),
      ],
      he: [
        slider(
          '',
          '1',
          { arrows: true, dots: true, autoplay: true, interval: 6, fullWidth: true },
          'feature',
          { perPage: 4, style: style('default', 'none') },
        ),
        slider('בחירת העורכים · 2 בתצוגה, נקודות', '2', { dots: true }, 'feature'),
        slider('אחרונים · 3 בתצוגה, חיצים', '3', { arrows: true }),
      ],
    }
    for (const locale of ['en', 'he'] as const) {
      const layout = await layoutOf(blog.id, locale)
      if (!layout.length || layout.some((b) => b.blockType === 'listing' && b.layout === 'slider'))
        continue
      // After the hero, before the filtered grid
      await save(blog.id, locale, [layout[0], ...variants[locale], ...layout.slice(1)])
    }
  }

  const home = await findPage('home')
  if (home) {
    const en = await layoutOf(home.id, 'en')
    const logos = en.find((b) => b.blockType === 'logos')
    const homeSlider = {
      arrows: true,
      dots: true,
      perView: '3',
      autoplay: false,
      interval: 5,
      fullWidth: false,
    }
    await save(
      home.id,
      'en',
      en.map((b) =>
        b === logos
          ? { ...b, display: 'marquee', speed: 'normal' }
          : b.blockType === 'listing' && b.layout === 'slider'
            ? { ...b, slider: homeSlider }
            : b,
      ),
    )
    const he = await layoutOf(home.id, 'he')
    if (logos && he.length && !he.some((b) => b.blockType === 'logos')) {
      const marquee = {
        ...(withoutIds(logos) as Block),
        heading: 'צוותים שעובדים איתנו',
        display: 'marquee',
        speed: 'normal',
      }
      await save(home.id, 'he', [he[0], marquee as Block, ...he.slice(1)])
    }
  }

  const { docs: footers } = await payload.find({
    collection: 'footers',
    depth: 0,
    limit: 1,
    where: { title: { equals: 'Main footer' } },
    req,
  })
  const footer = footers[0]
  if (footer) {
    const social = [...(footer.social ?? [])]
    const add = {
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.instagram.com',
      x: 'https://x.com',
    }
    for (const [platform, href] of Object.entries(add)) {
      if (!social.some((item) => item.platform === platform))
        social.push({ platform: platform as never, url: href })
    }
    await payload.update({
      collection: 'footers',
      id: footer.id,
      data: { social, _status: 'published' } as never,
      req,
    })
  }
}

// v3: re-create demo images (v1 uploaded them in parallel and some files got the wrong bytes),
// and make the home blog slider full width
async function upgradeTo3(payload: Payload, req: PayloadRequest): Promise<void> {
  payload.logger.info('[seed] upgrade 3: repair demo images, full-width home slider')
  const { docs } = await payload.find({
    collection: 'media',
    depth: 0,
    pagination: false,
    where: { filename: { like: 'demo-' } },
    req,
  })
  for (const media of docs) {
    const match = media.filename?.match(/^demo-(photo|avatar|logo)-([a-z0-9-]+)-(\d+)\.png$/)
    if (!match) continue
    const [, kind, slug, index] = match
    const label =
      kind === 'avatar'
        ? slug.toUpperCase()
        : slug.replace(/(^|-)([a-z])/g, (_, dash, c) => `${dash ? ' ' : ''}${c.toUpperCase()}`)
    const data =
      kind === 'avatar'
        ? await avatarImage(label, Number(index))
        : kind === 'logo'
          ? await logoImage(label)
          : await placeholderImage(label, Number(index))
    await payload.update({
      collection: 'media',
      id: media.id,
      data: {},
      file: { data, mimetype: 'image/png', name: media.filename!, size: data.length },
      overwriteExistingFiles: true,
      req,
    })
  }

  const home = (
    await payload.find({
      collection: 'pages',
      locale: 'en',
      depth: 0,
      limit: 1,
      where: { slug: { equals: 'home' } },
      req,
    })
  ).docs[0]
  if (!home) return
  for (const locale of ['en', 'he'] as const) {
    const layout = ((
      await payload.findByID({ collection: 'pages', id: home.id, locale, depth: 0, req })
    ).layout ?? []) as unknown as Block[]
    const next = layout.map((b) =>
      b.blockType === 'listing' &&
      b.collection === 'posts' &&
      b.heading &&
      /blog|בלוג/i.test(String(b.heading))
        ? {
            ...b,
            layout: 'slider',
            slider: {
              perView: '3',
              arrows: true,
              dots: true,
              autoplay: false,
              interval: 5,
              fullWidth: true,
            },
          }
        : b,
    )
    await payload.update({
      collection: 'pages',
      id: home.id,
      locale,
      data: { layout: next, _status: 'published' } as never,
      req,
    })
  }
}
