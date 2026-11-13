import { Media } from '@/components/Media'
import type { TestimonialsBlock as TestimonialsData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

export function TestimonialsBlock({ block }: { block: TestimonialsData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <div className="grid" style={{ ['--cols' as string]: Math.min(block.items?.length ?? 3, 3) }}>
        {block.items?.map((item, i) => (
          <figure key={item.id ?? i} className="card card--outline testimonial">
            <blockquote className="testimonial__quote">“{item.quote}”</blockquote>
            <figcaption className="cluster">
              {item.photo && <Media media={item.photo} sizes="48px" className="testimonial__photo" />}
              <span>
                <strong>{item.name}</strong>
                {item.role && <span className="muted small"> · {item.role}</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
