import { sectionBlock } from '@/fields/blockStyle'

export const LogosBlock = sectionBlock({
  slug: 'logos',
  interfaceName: 'LogosBlock',
  labels: { singular: 'Logos', plural: 'Logos' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      type: 'row',
      fields: [
        {
          name: 'display',
          type: 'select',
          defaultValue: 'row',
          options: [
            { label: 'Row', value: 'row' },
            { label: 'Marquee (scrolling)', value: 'marquee' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'speed',
          type: 'select',
          defaultValue: 'normal',
          options: [
            { label: 'Slow', value: 'slow' },
            { label: 'Normal', value: 'normal' },
            { label: 'Fast', value: 'fast' },
          ],
          admin: { width: '50%', condition: (_, sibling) => sibling?.display === 'marquee' },
        },
      ],
    },
    {
      name: 'logos',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
            { name: 'url', label: 'URL', type: 'text', admin: { width: '50%' } },
          ],
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
})
