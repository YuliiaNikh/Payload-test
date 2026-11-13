import { sectionBlock } from '@/fields/blockStyle'

export const LogosBlock = sectionBlock({
  slug: 'logos',
  interfaceName: 'LogosBlock',
  labels: { singular: 'Logos', plural: 'Logos' },
  fields: [
    { name: 'heading', type: 'text' },
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
