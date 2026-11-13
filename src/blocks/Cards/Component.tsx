import { Media } from '@/components/Media'
import { linkHref } from '@/lib/links'
import type { CardsBlock as CardsData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

export function CardsBlock({ block, ctx }: { block: CardsData; ctx: BlockContext }) {
  const cardClass = `card${block.cardStyle && block.cardStyle !== 'default' ? ` card--${block.cardStyle}` : ''}`
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} intro={block.intro} />
      <div className="grid" style={{ ['--cols' as string]: block.cardStyle === 'horizontal' ? 2 : Number(block.columns ?? 3) }}>
        {block.items?.map((item, i) => {
          const href = linkHref(item.link, ctx)
          const body = (
            <>
              {item.image && (
                <div className="card__media">
                  <Media media={item.image} sizes="(max-width: 600px) 100vw, 33vw" />
                </div>
              )}
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                <h3 className="card__title">{item.title}</h3>
                {item.text && <p className="card__text">{item.text}</p>}
                {href && item.link?.label && <span className="card__footer btn btn--link">{item.link.label}</span>}
              </div>
            </>
          )
          return href ? (
            <a key={item.id ?? i} className={cardClass} href={href}>
              {body}
            </a>
          ) : (
            <div key={item.id ?? i} className={cardClass}>
              {body}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
