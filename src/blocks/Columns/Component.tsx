import { Buttons } from '@/components/Buttons'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import type { ColumnsBlock as ColumnsData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'

type ColumnItem = NonNullable<NonNullable<ColumnsData['columns']>[number]['content']>[number]

function ColumnItemView({ item, ctx }: { item: ColumnItem; ctx: BlockContext }) {
  switch (item.blockType) {
    case 'colText':
      return <RichText data={item.content} />
    case 'colImage':
      return (
        <figure className="column__figure">
          <Media media={item.image} sizes="(max-width: 600px) 100vw, 33vw" />
          {item.caption && <figcaption className="small muted">{item.caption}</figcaption>}
        </figure>
      )
    case 'colButtons':
      return <Buttons links={item.links} ctx={ctx} />
    default:
      return null
  }
}

export function ColumnsBlock({ block, ctx }: { block: ColumnsData; ctx: BlockContext }) {
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <div className="grid" style={{ ['--cols' as string]: block.columns?.length ?? 1 }}>
        {block.columns?.map((column, i) => (
          <div key={column.id ?? i} className="stack column">
            {column.content?.map((item, j) => (
              <ColumnItemView key={item.id ?? j} item={item} ctx={ctx} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
