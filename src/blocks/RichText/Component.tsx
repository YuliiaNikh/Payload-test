import { RichText } from '@/components/RichText'
import type { RichTextBlock as RichTextData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section } from '../Section'

export function RichTextBlock({ block }: { block: RichTextData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <RichText data={block.content} className={block.width === 'wide' ? 'rich-text' : 'prose rich-text'} />
    </Section>
  )
}
