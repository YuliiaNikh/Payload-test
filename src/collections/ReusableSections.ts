import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { layoutField } from '@/fields/layout'

import { localizedDrafts } from './shared/drafts'

// Elementor "global widget" / Gutenberg "synced pattern": edit once, used on many pages
export const ReusableSections: CollectionConfig = {
  slug: 'reusable-sections',
  // Short table prefix: nested block tables would exceed Postgres' 63-character name limit
  dbName: 'reusable',
  labels: { singular: 'Reusable section', plural: 'Reusable sections' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  fields: [
    { name: 'title', type: 'text', required: true, admin: { description: 'Admin name only, not shown on the site.' } },
    // No nesting a reusable section inside another one
    layoutField({ exclude: ['reusableSection'] }),
  ],
}
