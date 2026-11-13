import { Buttons } from '@/components/Buttons'
import type { CtaBlock as CtaData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section } from '../Section'

export function CtaBlock({ block, ctx }: { block: CtaData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id} className="cta">
      <div className="stack cta__inner">
        <h2>{block.heading}</h2>
        {block.text && <p className="lead">{block.text}</p>}
        <Buttons links={block.links} ctx={ctx} />
      </div>
    </Section>
  )
}
