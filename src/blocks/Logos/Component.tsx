import { Media } from '@/components/Media'
import type { LogosBlock as LogosData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

export function LogosBlock({ block }: { block: LogosData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <ul className="logos">
        {block.logos?.map((logo, i) => {
          const content = logo.image ? <Media media={logo.image} sizes="160px" /> : <span>{logo.name}</span>
          return (
            <li key={logo.id ?? i} className="logos__item" title={logo.name}>
              {logo.url ? (
                <a href={logo.url} aria-label={logo.name}>
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
