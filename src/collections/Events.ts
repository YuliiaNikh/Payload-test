import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'
import { layoutField } from '@/fields/layout'

import { localizedDrafts } from './shared/drafts'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'location', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'startDate',
  fields: [
    ...cptBaseFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'startDate',
          type: 'date',
          required: true,
          admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' },
        },
        {
          name: 'endDate',
          type: 'date',
          admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' },
        },
      ],
    },
    { name: 'location', type: 'text', localized: true },
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'speakers',
      type: 'relationship',
      relationTo: 'people',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'eventTypes',
      type: 'relationship',
      relationTo: 'event-types',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    layoutField({ label: 'Extra sections' }),
  ],
}
