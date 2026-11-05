import type { Block } from 'payload'

import { link, pardesAppearances } from '@/fields/link'

export const PeopleCarousel: Block = {
  slug: 'peopleCarousel',
  interfaceName: 'PeopleCarouselBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'people',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
    },
    {
      name: 'enableLink',
      type: 'checkbox',
    },
    link({
      appearances: pardesAppearances,
      overrides: {
        admin: {
          condition: (_, { enableLink } = {}) => Boolean(enableLink),
        },
      },
    }),
  ],
  labels: {
    plural: 'People carousels',
    singular: 'People carousel',
  },
}
