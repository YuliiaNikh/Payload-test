import type { CollectionConfig } from 'payload'

import { isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'

type Options = {
  slug: string
  singular: string
  plural: string
}

// A WordPress-style taxonomy: terms have no drafts and are public.
// Hierarchical taxonomies are registered with the nested docs plugin, which adds parent + breadcrumbs.
export const createTaxonomy = ({ slug, singular, plural }: Options): CollectionConfig => ({
  slug,
  labels: { singular, plural },
  admin: {
    group: 'Taxonomies',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    slugField(),
    { name: 'description', type: 'textarea', localized: true },
  ],
})
