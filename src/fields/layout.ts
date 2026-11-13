import type { BlockSlug, BlocksField } from 'payload'

import { sectionBlockSlugs } from '@/blocks/registry'

type Options = { name?: string; label?: string; exclude?: string[] }

// The page builder: a block list per language (Hebrew can have different sections)
export const layoutField = ({ name = 'layout', label = 'Sections', exclude = [] }: Options = {}): BlocksField => ({
  name,
  label,
  labels: { singular: 'Section', plural: 'Sections' },
  type: 'blocks',
  localized: true,
  blocks: [],
  blockReferences: sectionBlockSlugs.filter((slug) => !exclude.includes(slug)) as BlockSlug[],
  admin: { initCollapsed: true },
})
