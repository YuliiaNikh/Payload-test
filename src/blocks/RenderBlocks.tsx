import type { ComponentType } from 'react'

import type { Page } from '@/payload-types'
import { evaluateVisibility, type VisibilityValue } from '@/visibility/evaluate'

import { CardsBlock } from './Cards/Component'
import { ColumnsBlock } from './Columns/Component'
import type { BlockContext } from './context'
import { CtaBlock } from './Cta/Component'
import { DynamicFieldBlock } from './DynamicField/Component'
import { FaqBlock } from './Faq/Component'
import { HeroBlock } from './Hero/Component'
import { HubSpotFormBlock } from './HubSpotForm/Component'
import { ListingBlock } from './Listing/Component'
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
const components: Record<string, ComponentType<{ block: any; ctx: BlockContext; index?: number }>> = {
  hero: HeroBlock,
  richText: RichTextBlock,
  mediaText: MediaTextBlock,
  cards: CardsBlock,
  listing: ListingBlock,
  columns: ColumnsBlock,
  tabs: TabsBlock,
  stats: StatsBlock,
  logos: LogosBlock,
  testimonials: TestimonialsBlock,
  faq: FaqBlock,
  cta: CtaBlock,
  hubspotForm: HubSpotFormBlock,
  dynamicField: DynamicFieldBlock,
  reusableSection: ReusableSectionBlock,
}

export async function RenderBlocks({ blocks, ctx }: { blocks: LayoutBlock[] | null | undefined; ctx: BlockContext }) {
  if (!blocks?.length) return null
  const now = new Date()
  const decisions = await Promise.all(
    blocks.map((block) => evaluateVisibility((block as { vis?: VisibilityValue }).vis, { ...ctx, now })),
  )

  let listings = 0
  return (
    <>
      {blocks.map((block, i) => {
        const Component = components[block.blockType]
        // Each listing on the page gets its own URL param prefix
        const index = block.blockType === 'listing' ? listings++ : undefined
        const { visible, classes } = decisions[i]
        if (!Component || !visible) return null
        const rendered = <Component key={block.id ?? i} block={block} ctx={ctx} index={index} />
        // Device rules are CSS so the same HTML works on every screen
        return classes.length ? (
          <div key={block.id ?? i} className={classes.join(' ')}>
            {rendered}
          </div>
        ) : (
          rendered
        )
      })}
    </>
  )
}
