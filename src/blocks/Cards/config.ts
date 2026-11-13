import { sectionBlock } from '@/fields/blockStyle'
import { linkField } from '@/fields/link'

export const CardsBlock = sectionBlock({
  slug: 'cards',
  interfaceName: 'CardsBlock',
  labels: { singular: 'Cards', plural: 'Cards' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      type: 'row',
      fields: [
        {
          name: 'columns',
          type: 'select',
          defaultValue: '3',
          options: ['2', '3', '4'].map((value) => ({ label: `${value} columns`, value })),
          admin: { width: '50%' },
        },
        {
          name: 'cardStyle',
          type: 'select',
          defaultValue: 'outline',
          options: [
            { label: 'Filled', value: 'default' },
            { label: 'Outline', value: 'outline' },
            { label: 'Elevated', value: 'elevated' },
            { label: 'Horizontal', value: 'horizontal' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
        linkField({ appearance: false }),
      ],
    },
  ],
})
