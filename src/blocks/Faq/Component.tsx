import { RichText } from '@/components/RichText'
import type { FaqBlock as FaqData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

export function FaqBlock({ block }: { block: FaqData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <div className="faq">
        {block.items?.map((item, i) => (
          <details key={item.id ?? i} className="faq__item">
            <summary>{item.question}</summary>
            <RichText data={item.answer} />
          </details>
        ))}
      </div>
    </Section>
  )
}
