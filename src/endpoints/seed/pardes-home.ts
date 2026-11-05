import type { RequiredDataFromCollectionSlug } from 'payload'

import type { Media } from '@/payload-types'

import { richText } from './lexical'

type HomeMedia = {
  birds: Media
  cardEvents: Media
  cardLibrary: Media
  cardPrograms: Media
  faculty: Media[]
  hero: Media
  tree: Media
}

const customLink = (
  label: string,
  url: string,
  appearance?: 'teal' | 'outlineRed' | 'outlineRedSmall',
) => ({
  type: 'custom' as const,
  label,
  url,
  ...(appearance ? { appearance } : {}),
})

const testimonialA = {
  quote:
    'Studying at Pardes with such a diverse group of Jewish souls has allowed me to ‘own’ my unique life experiences, and taught me how to make learning a meaningful part of my Jewish future',
  name: 'Yonatan Chamberlin',
  location: 'St. Louis Park, MN',
  detail: 'Year ’03',
}

const testimonialB = {
  quote:
    'I love that Pardes has given me the tools to reclaim a tradition that is mine,\nbut which wasn’t open to me until I came here',
  name: 'Myahn Haroush',
  location: 'Tel Aviv, Israel',
  detail: 'Year ’21, Shana Bet Fellows ’22',
}

// Homepage content from the Figma "HP desktop" frame
export const pardesHome = (media: HomeMedia): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'home',
  _status: 'published',
  title: 'Home',
  hero: {
    type: 'pardes',
    title: 'The Art of Jewish Learning.',
    media: media.hero.id,
    richText: richText(
      'Rooted in tradition. Relevant for today. Transforming the Jewish future.',
      'Pardes empowers Jews of all backgrounds to engage deeply with Torah, grow as educators and leaders, and bring Jewish learning into communities worldwide. We are proudly based in Israel and deeply committed to its people, its complexity, and its enduring role in Jewish life.',
    ),
  },
  layout: [
    {
      blockType: 'cardsSection',
      title: 'Explore Pardes',
      cards: [
        {
          media: media.cardPrograms.id,
          title: 'Programs',
          description:
            "Immersive, online, and global.\nWhether you're looking for a year in Jerusalem or a four-week seminar online, our programs help you explore Jewish texts deeply and meaningfully.",
          enableLink: true,
          link: customLink('Learn more', '#', 'outlineRedSmall'),
        },
        {
          media: media.cardEvents.id,
          title: 'Event Calendar',
          description:
            'Timely, spirited, and communal.\nJoin Pardes for holiday learning, lectures, retreats, and gatherings that bring Torah to life in real time and real community.',
          enableLink: true,
          link: customLink('Learn more', '#', 'outlineRedSmall'),
        },
        {
          media: media.cardLibrary.id,
          title: 'Library',
          description:
            'A treasury of Torah wisdom.\nDive into recordings, podcasts, articles, and learning guides from our faculty—anytime, anywhere.',
          enableLink: true,
          link: customLink('Learn more', '#', 'outlineRedSmall'),
        },
      ],
    },
    {
      blockType: 'impact',
      title: 'Impact That Echoes Through Generations',
      description:
        'For over 50 years, Pardes has cultivated thousands of leaders, educators, and changemakers who are shaping Jewish life in communities across the globe',
      stats: [
        { value: '2,321', label: 'Alumni' },
        { value: '10 Million', label: 'people reached with digital content' },
        { value: '8,000+', label: 'people impacted by alumni' },
      ],
      testimonials: [
        testimonialA,
        testimonialB,
        testimonialA,
        testimonialB,
        testimonialA,
        testimonialB,
      ],
    },
    {
      blockType: 'imageText',
      imagePosition: 'left',
      imageWidth: 'half',
      background: 'light',
      media: media.birds.id,
      title: 'A Home for the Next Generation of Jewish Learning',
      headingStyle: 'medium',
      body: 'After more than 50 years of shaping Jewish life from temporary spaces, Pardes is building a permanent home in Jerusalem—a modern, purpose-built Beit Midrash and community campus designed to serve learners for generations to come.',
      links: [{ link: customLink('Donate', '#', 'teal') }],
    },
    {
      blockType: 'peopleCarousel',
      title: 'Meet the Heart of Pardes',
      people: [...media.faculty, ...media.faculty].map((photo) => ({
        photo: photo.id,
        name: 'Name Name',
      })),
      enableLink: true,
      link: customLink('Meet the Faculty', '#', 'outlineRed'),
    },
    {
      blockType: 'imageText',
      imagePosition: 'right',
      imageWidth: 'half',
      background: 'gray',
      media: media.tree.id,
      title: 'Join Us in Shaping the Jewish Future',
      headingStyle: 'bold',
      body: "At Pardes, learning isn’t just about knowledge—it’s about impact.\nFor over 50 years, we've been nurturing leaders, training educators, and transforming communities through deep, honest engagement with Torah. Whether you're looking to learn, to teach, or to support the next generation of Jewish leadership, there’s a place for you at Pardes.",
      links: [
        { link: customLink('Find a Program', '#', 'outlineRed') },
        { link: customLink('Support Pardes', '#', 'outlineRed') },
      ],
    },
  ],
  meta: {
    title: 'The Art of Jewish Learning',
    description:
      'Pardes empowers Jews of all backgrounds to engage deeply with Torah, grow as educators and leaders, and bring Jewish learning into communities worldwide.',
    image: media.hero.id,
  },
})

const navLink = (label: string) => ({ link: { type: 'custom' as const, label, url: '#' } })

export const pardesHeader = {
  navItems: ['About', 'Programs', 'Library', 'Alumni', 'News'].map((label) => ({
    ...navLink(label),
    subItems: [],
  })),
  donateLink: { type: 'custom' as const, label: 'Donate', url: '#' },
  dedication: 'Today’s Learning is dedicated to the memory of our loving parents [Name]',
}

// Quick replies for the floating program finder, built from the Programs list in the footer
export const pardesProgramFinder = {
  enabled: true,
  launcherLabel: 'Lets Find You a Program!',
  title: 'Hi there 👋',
  greeting: 'Hi!\nI’m here to help :)\nWhat program are you looking for?',
  options: [
    {
      label: 'I’m looking for a short program, 2-3 months',
      reply: 'Here are some programs that might fit you:',
      programs: ['Summer Program', 'Pardes Learning Seminar', 'Pop-Up Beit Midrash'].map(navLink),
    },
    {
      label: 'A year of learning in Jerusalem',
      reply: 'For a full year in Jerusalem, take a look at:',
      programs: ['Beit Midrash Program'].map(navLink),
    },
    {
      label: 'I’m an educator',
      reply: 'These programs are built for educators:',
      programs: ['Jewish Educators', 'Mahloket Matters Fellowship'].map(navLink),
    },
    {
      label: 'Learning where I live',
      reply: 'You can learn with Pardes close to home:',
      programs: ['Pardes in Your Community', 'Events'].map(navLink),
    },
  ],
  followUp: 'Do you want me to narrow it down or look at something else?',
  noMatch: 'I couldn’t find a program for that. Try one of these:',
}

const column = (heading: string, labels: string[]) => ({ heading, links: labels.map(navLink) })

export const pardesFooter = (newsletterFormId: number) => ({
  columns: [
    column('About', ['Mission and Vision', 'Our Team', 'New Building', 'Careers', 'Contact Us']),
    column('Programs', [
      'Beit Midrash Program',
      'Summer Program',
      'Pardes Learning Seminar',
      'Jewish Educators',
      'Mahloket Matters Fellowship',
      'Pop-Up Beit Midrash',
      'Pardes in Your Community',
      'Events',
    ]),
    column('Library', ['Topic', 'Topic', 'Topic', 'Topic']),
    column('Alumni', ['Page', 'Page', 'Page', 'Page', 'Page', 'Page']),
    column('News', Array(8).fill('Library')),
    column('Donate', Array(8).fill('Library')),
  ],
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    tiktok: 'https://www.tiktok.com/',
  },
  newsletter: {
    form: newsletterFormId,
    heading: 'Sign up for our newsletter!',
    buttonLabel: 'Sign me up',
  },
})
