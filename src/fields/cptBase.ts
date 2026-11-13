import type { Field } from 'payload'

import { slugField } from './slug'

// Fields every CPT item has, like a WordPress post's title, slug, excerpt and featured image
export const cptBaseFields = ({ titleLabel = 'Title' }: { titleLabel?: string } = {}): Field[] => [
  { name: 'title', label: titleLabel, type: 'text', localized: true, required: true },
  slugField(),
  { name: 'excerpt', type: 'textarea', localized: true },
  {
    name: 'featuredImage',
    type: 'upload',
    relationTo: 'media',
    admin: { position: 'sidebar' },
  },
]
