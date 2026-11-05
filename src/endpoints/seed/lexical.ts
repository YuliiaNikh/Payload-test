// Minimal Lexical rich-text values for seed data: one plain paragraph per string
export const paragraph = (text: string) => ({
  type: 'paragraph',
  children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text, version: 1 }],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  textFormat: 0,
  version: 1,
})

export const richText = (...paragraphs: string[]) => ({
  root: {
    type: 'root',
    children: paragraphs.map(paragraph),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})
