import { Buttons } from '@/components/Buttons'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import type { MediaTextBlock as MediaTextData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section } from '../Section'

export function MediaTextBlock({ block, ctx }: { block: MediaTextData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <div className={`media-text media-text--image-${block.imagePosition ?? 'start'}`}>
        <div className="media-text__media">
          <Media media={block.image} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="stack">
          {block.heading && <h2>{block.heading}</h2>}
          <RichText data={block.content} />
          <Buttons links={block.links} ctx={ctx} />
        </div>
      </div>
    </Section>
  )
}
