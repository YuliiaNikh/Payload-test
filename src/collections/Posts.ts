import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'
import { layoutField } from '@/fields/layout'

import { localizedDrafts } from './shared/drafts'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Blog post', plural: 'Blog posts' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: '-publishedDate',
  fields: [
    ...cptBaseFields(),
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'publishedDate',
      type: 'date',
      // Filled with "now" on create, so it is never empty in practice
      defaultValue: () => new Date().toISOString(),
      admin: { position: 'sidebar' },
    },
    { name: 'author', type: 'relationship', relationTo: 'people', admin: { position: 'sidebar' } },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    { name: 'tags', type: 'relationship', relationTo: 'tags', hasMany: true, admin: { position: 'sidebar' } },
    layoutField({ label: 'Extra sections' }),
  ],
}
