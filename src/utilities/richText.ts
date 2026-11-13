import type { Post } from '@/payload-types'

// The rich text shape Payload generates for every richText field
export type RichTextValue = NonNullable<Post['content']>

type Node = Record<string, unknown>

const textNode = (text: string, bold = false): Node => ({
  type: 'text',
  text,
  format: bold ? 1 : 0,
  style: '',
  mode: 'normal',
  detail: 0,
  version: 1,
})

const element = (type: string, children: Node[], extra: Node = {}): Node => ({
  type,
  format: '',
  indent: 0,
  version: 1,
  direction: null,
  children,
  ...extra,
})

// Builds Lexical rich text from plain strings: "## Title" becomes a heading, "- item" lines a list
export function richText(...blocks: string[]): RichTextValue {
  const children = blocks.map((block) => {
    if (block.startsWith('## ')) return element('heading', [textNode(block.slice(3))], { tag: 'h2' })
    if (block.startsWith('### ')) return element('heading', [textNode(block.slice(4))], { tag: 'h3' })
    if (block.startsWith('- ')) {
      const items = block.split('\n').map((line, i) =>
        element('listitem', [textNode(line.replace(/^- /, ''))], { value: i + 1 }),
      )
      return element('list', items, { listType: 'bullet', start: 1, tag: 'ul' })
    }
    return element('paragraph', [textNode(block)], { textFormat: 0, textStyle: '' })
  })
  return { root: element('root', children) } as unknown as RichTextValue
}
