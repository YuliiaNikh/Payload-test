import { Media } from '@/components/Media'
import type { LogosBlock as LogosData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

type Logo = NonNullable<LogosData['logos']>[number]

function LogoItem({ logo }: { logo: Logo }) {
  const content = logo.image ? <Media media={logo.image} sizes="160px" /> : <span>{logo.name}</span>
  return (
    <li className="logos__item" title={logo.name}>
      {logo.url ? (
        <a href={logo.url} aria-label={logo.name}>
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

export function LogosBlock({ block }: { block: LogosData; ctx: BlockContext }) {
  const logos = block.logos ?? []

  if (block.display === 'marquee') {
    // The list is rendered twice so the loop is seamless; the copy is hidden from screen readers
    return (
      <Section style={block.style} id={block.id}>
        <SectionHeader heading={block.heading} />
        <div className={`marquee marquee--${block.speed ?? 'normal'}`}>
          <div className="marquee__track">
            <ul className="logos marquee__group">
              {logos.map((logo, i) => (
                <LogoItem key={logo.id ?? i} logo={logo} />
              ))}
            </ul>
            <ul className="logos marquee__group" aria-hidden="true">
              {logos.map((logo, i) => (
                <LogoItem key={logo.id ?? i} logo={logo} />
              ))}
            </ul>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <ul className="logos">
        {logos.map((logo, i) => (
          <LogoItem key={logo.id ?? i} logo={logo} />
        ))}
      </ul>
    </Section>
  )
}
