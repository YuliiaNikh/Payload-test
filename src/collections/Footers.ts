import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { linkField } from '@/fields/link'

import { localizedDrafts } from './shared/drafts'

export const Footers: CollectionConfig = {
  slug: 'footers',
  admin: {
    group: 'Site',
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  fields: [
    { name: 'title', type: 'text', required: true, admin: { description: 'Admin name, e.g. "Main footer".' } },
    { name: 'text', label: 'About text', type: 'textarea', localized: true },
    {
      name: 'columns',
      type: 'array',
      localized: true,
      maxRows: 4,
      admin: { initCollapsed: true },
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'links', type: 'array', admin: { initCollapsed: true }, fields: [linkField({ name: 'link', appearance: false })] },
      ],
    },
    {
      name: 'social',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'platform',
              type: 'select',
              required: true,
              options: ['LinkedIn', 'Facebook', 'Instagram', 'X', 'YouTube'].map((value) => ({ label: value, value: value.toLowerCase() })),
              admin: { width: '40%' },
            },
            { name: 'url', label: 'URL', type: 'text', required: true, admin: { width: '60%' } },
          ],
        },
      ],
    },
    { name: 'legal', label: 'Legal line', type: 'text', localized: true },
  ],
}
