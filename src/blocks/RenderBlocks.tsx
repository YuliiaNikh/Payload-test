import type { ComponentType } from 'react'

import type { Page } from '@/payload-types'

import { CardsBlock } from './Cards/Component'
import { ColumnsBlock } from './Columns/Component'
import type { BlockContext } from './context'
import { CtaBlock } from './Cta/Component'
import { DynamicFieldBlock } from './DynamicField/Component'
import { FaqBlock } from './Faq/Component'
import { HeroBlock } from './Hero/Component'
import { LogosBlock } from './Logos/Component'
import { MediaTextBlock } from './MediaText/Component'
import { ReusableSectionBlock } from './ReusableSection/Component'
import { RichTextBlock } from './RichText/Component'
import { StatsBlock } from './Stats/Component'
import { TabsBlock } from './Tabs/Component'
import { TestimonialsBlock } from './Testimonials/Component'

export type LayoutBlock = NonNullable<Page['layout']>[number]

// blockType -> component; adding a block = config in registry.ts + an entry here
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- each component narrows its own block type
const components: Record<string, ComponentType<{ block: any; ctx: BlockContext }>> = {
  hero: HeroBlock,
  richText: RichTextBlock,
  mediaText: MediaTextBlock,
  cards: CardsBlock,
  columns: ColumnsBlock,
  tabs: TabsBlock,
  stats: StatsBlock,
  logos: LogosBlock,
  testimonials: TestimonialsBlock,
  faq: FaqBlock,
  cta: CtaBlock,
  dynamicField: DynamicFieldBlock,
  reusableSection: ReusableSectionBlock,
}

export function RenderBlocks({ blocks, ctx }: { blocks: LayoutBlock[] | null | undefined; ctx: BlockContext }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        const Component = components[block.blockType]
        return Component ? <Component key={block.id ?? i} block={block} ctx={ctx} /> : null
      })}
    </>
  )
}
