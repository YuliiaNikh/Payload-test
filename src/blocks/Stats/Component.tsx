import type { StatsBlock as StatsData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

export function StatsBlock({ block }: { block: StatsData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <dl className="grid stats" style={{ ['--cols' as string]: Math.min(block.items?.length ?? 3, 4) }}>
        {block.items?.map((item, i) => (
          <div key={item.id ?? i} className="stats__item">
            <dt className="stats__label">{item.label}</dt>
            <dd className="stats__value">{item.value}</dd>
            {item.description && <dd className="muted small">{item.description}</dd>}
          </div>
        ))}
      </dl>
    </Section>
  )
}
