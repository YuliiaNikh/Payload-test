import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'
import { appearanceField } from '@/fields/appearance'
import { layoutField } from '@/fields/layout'

import { localizedDrafts } from './shared/drafts'

export const Glossary: CollectionConfig = {
  slug: 'glossary',
  labels: { singular: 'Glossary term', plural: 'Glossary' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'title',
  fields: [
    ...cptBaseFields({ titleLabel: 'Term' }),
    { name: 'content', label: 'Definition', type: 'richText', localized: true },
    {
      name: 'relatedTerms',
      type: 'relationship',
      relationTo: 'glossary',
      hasMany: true,
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
    },
    layoutField({ label: 'Extra sections' }),
    appearanceField(),
  ],
}
