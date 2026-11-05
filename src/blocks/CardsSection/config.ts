import type { Block } from 'payload'

import { link, pardesAppearances } from '@/fields/link'

export const CardsSection: Block = {
  slug: 'cardsSection',
  interfaceName: 'CardsSectionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'cards',
      type: 'array',
      admin: {
        description: 'Up to 3 cards per row; more start a new row.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
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
      minRows: 1,
    },
  ],
  labels: {
    plural: 'Cards sections',
    singular: 'Cards section',
  },
}
