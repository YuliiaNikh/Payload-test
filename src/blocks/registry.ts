import type { Block } from 'payload'

import { CardsBlock } from './Cards/config'
import { ColumnButtonsBlock, ColumnImageBlock, ColumnsBlock, ColumnTextBlock } from './Columns/config'
import { CtaBlock } from './Cta/config'
import { DynamicFieldBlock } from './DynamicField/config'
import { FaqBlock } from './Faq/config'
import { HeroBlock } from './Hero/config'
import { ListingBlock } from './Listing/config'
import { LogosBlock } from './Logos/config'
import { MediaTextBlock } from './MediaText/config'
import { ReusableSectionBlock } from './ReusableSection/config'
import { RichTextBlock } from './RichText/config'
import { StatsBlock } from './Stats/config'
import { TabsBlock } from './Tabs/config'
import { TestimonialsBlock } from './Testimonials/config'

// Order = order in the "Add block" menu
export const sectionBlocks: Block[] = [
  HeroBlock,
  RichTextBlock,
  MediaTextBlock,
  CardsBlock,
  ListingBlock,
  ColumnsBlock,
  TabsBlock,
  StatsBlock,
  LogosBlock,
  TestimonialsBlock,
  FaqBlock,
  CtaBlock,
  DynamicFieldBlock,
  ReusableSectionBlock,
]

// Registered once in the Payload config; layout fields reference them by slug
export const allBlocks: Block[] = [...sectionBlocks, ColumnTextBlock, ColumnImageBlock, ColumnButtonsBlock]

export const sectionBlockSlugs = sectionBlocks.map((block) => block.slug)
