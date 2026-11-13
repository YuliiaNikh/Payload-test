// Starting layouts for new pages. The client edits everything afterwards.
export const pageTemplateOptions = [
  { label: 'Blank', value: 'blank' },
  { label: 'Landing page', value: 'landing' },
  { label: 'About', value: 'about' },
  { label: 'Contact', value: 'contact' },
  { label: 'Archive (list of items)', value: 'archive' },
] as const

export type PageTemplate = (typeof pageTemplateOptions)[number]['value']

const paragraph = (text: string) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: null,
    children: [
      {
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: null,
        textFormat: 0,
        textStyle: '',
        children: [{ type: 'text', text, format: 0, style: '', mode: 'normal', detail: 0, version: 1 }],
      },
    ],
  },
})

const cta = {
  blockType: 'cta',
  heading: 'Ready to talk?',
  text: 'Tell us what you need and we will get back to you.',
  links: [{ link: { type: 'custom', url: '#contact', label: 'Contact us', appearance: 'primary' } }],
  style: { background: 'accent', spacing: 'md', align: 'center' },
}

export const pageTemplates: Record<Exclude<PageTemplate, 'blank'>, Record<string, unknown>[]> = {
  landing: [
    {
      blockType: 'hero',
      eyebrow: 'New',
      heading: 'A clear headline for this page',
      text: 'One or two sentences that explain the offer.',
      variant: 'split',
      links: [
        { link: { type: 'custom', url: '#', label: 'Get started', appearance: 'primary' } },
        { link: { type: 'custom', url: '#', label: 'Learn more', appearance: 'outline' } },
      ],
      style: { background: 'default', spacing: 'lg', align: 'start' },
    },
    {
      blockType: 'cards',
      heading: 'Why choose us',
      columns: '3',
      cardStyle: 'outline',
      items: [
        { title: 'First benefit', text: 'Explain the benefit in a sentence.' },
        { title: 'Second benefit', text: 'Explain the benefit in a sentence.' },
        { title: 'Third benefit', text: 'Explain the benefit in a sentence.' },
      ],
      style: { background: 'surface', spacing: 'md', align: 'start' },
    },
    { blockType: 'faq', heading: 'Questions', items: [{ question: 'A common question?', answer: paragraph('The answer.') }], style: { background: 'default', spacing: 'md', align: 'start' } },
    cta,
  ],
  about: [
    { blockType: 'hero', heading: 'About us', text: 'Who we are and what we do.', variant: 'centered', style: { background: 'surface', spacing: 'lg', align: 'center' } },
    { blockType: 'richText', content: paragraph('Our story.'), width: 'narrow', style: { background: 'default', spacing: 'md', align: 'start' } },
    { blockType: 'stats', items: [{ value: '10+', label: 'Years' }, { value: '200', label: 'Clients' }, { value: '12', label: 'Countries' }], style: { background: 'default', spacing: 'md', align: 'center' } },
    cta,
  ],
  contact: [
    { blockType: 'hero', heading: 'Contact us', text: 'We usually reply within one working day.', variant: 'centered', style: { background: 'surface', spacing: 'md', align: 'center' } },
    { blockType: 'richText', content: paragraph('Address, phone and opening hours.'), width: 'narrow', style: { background: 'default', spacing: 'md', align: 'start' } },
  ],
  archive: [
    { blockType: 'hero', heading: 'Archive title', text: 'Short introduction to this list.', variant: 'centered', style: { background: 'surface', spacing: 'sm', align: 'center' } },
  ],
}
