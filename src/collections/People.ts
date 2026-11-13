import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'
import { appearanceField } from '@/fields/appearance'
import { layoutField } from '@/fields/layout'

import { localizedDrafts } from './shared/drafts'

export const People: CollectionConfig = {
  slug: 'people',
  labels: { singular: 'Person', plural: 'People' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'jobTitle', 'department', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'title',
  fields: [
    ...cptBaseFields({ titleLabel: 'Name' }),
    { name: 'jobTitle', type: 'text', localized: true },
    { name: 'content', label: 'Bio', type: 'richText', localized: true },
    { name: 'department', type: 'relationship', relationTo: 'departments', admin: { position: 'sidebar' } },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Blog posts',
          // JetEngine-style reverse relation: posts that have this person as author
          fields: [{ name: 'posts', type: 'join', collection: 'posts', on: 'author' }],
        },
        {
          label: 'Events',
          fields: [{ name: 'events', type: 'join', collection: 'events', on: 'speakers' }],
        },
      ],
    },
    layoutField({ label: 'Extra sections' }),
    appearanceField(),
  ],
}
