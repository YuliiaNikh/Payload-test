import type { Field } from 'payload'

import { firstLetter } from '@/utilities/letters'

import { slugField } from './slug'

// Fields every CPT item has, like a WordPress post's title, slug, excerpt and featured image
export const cptBaseFields = ({ titleLabel = 'Title' }: { titleLabel?: string } = {}): Field[] => [
  { name: 'title', label: titleLabel, type: 'text', localized: true, required: true },
  slugField(),
  { name: 'excerpt', type: 'textarea', localized: true },
  {
    // A–Z filter key, kept in sync with the title of each language (no "starts with" query operator)
    name: 'letter',
    type: 'text',
    localized: true,
    index: true,
    admin: { hidden: true },
    hooks: {
      beforeChange: [({ siblingData, value }) => firstLetter(siblingData?.title) ?? value],
    },
  },
  {
    name: 'featuredImage',
    type: 'upload',
    relationTo: 'media',
    admin: { position: 'sidebar' },
  },
]
