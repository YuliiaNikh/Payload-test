import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'resourceType', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  fields: [
    ...cptBaseFields(),
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'externalUrl',
      label: 'External link (video, PDF…)',
      type: 'text',
      localized: true,
    },
    {
      name: 'relatedResources',
      type: 'relationship',
      relationTo: 'resources',
      hasMany: true,
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
    },
    {
      name: 'resourceType',
      type: 'relationship',
      relationTo: 'resource-types',
      admin: { position: 'sidebar' },
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    { name: 'topics', type: 'relationship', relationTo: 'topics', hasMany: true, admin: { position: 'sidebar' } },
  ],
}
