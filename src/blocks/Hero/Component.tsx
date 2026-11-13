import { Buttons } from '@/components/Buttons'
import { Media } from '@/components/Media'
import type { HeroBlock as HeroData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section } from '../Section'

export function HeroBlock({ block, ctx }: { block: HeroData; ctx: BlockContext }) {
  const split = block.variant !== 'centered' && block.image
  return (
    <Section style={block.style} id={block.id} className={`hero hero--${split ? 'split' : 'centered'}`}>
      <div className="hero__inner">
        <div className="hero__text stack">
          {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
          <h1 className="display">{block.heading}</h1>
          {block.text && <p className="lead">{block.text}</p>}
          <Buttons links={block.links} ctx={ctx} />
        </div>
        {block.image && (
          <div className="hero__media">
            <Media media={block.image} sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
        )}
      </div>
    </Section>
  )
}
