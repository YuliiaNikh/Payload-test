import type { TextField } from 'payload'

import { slugify } from '@/utilities/slugify'

// Localized slug, filled from the source field when left empty
export const slugField = (source = 'title'): TextField => ({
  name: 'slug',
  type: 'text',
  localized: true,
  index: true,
  required: true,
  admin: {
    position: 'sidebar',
    description: 'URL part for this language. Filled from the title when empty.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        const raw = typeof value === 'string' && value.trim() ? value : data?.[source]
        return typeof raw === 'string' ? slugify(raw) : value
      },
    ],
  },
})
