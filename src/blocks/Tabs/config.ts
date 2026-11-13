import { sectionBlock } from '@/fields/blockStyle'

export const TabsBlock = sectionBlock({
  slug: 'tabs',
  interfaceName: 'TabsBlock',
  labels: { singular: 'Tabs', plural: 'Tabs' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'content', type: 'richText' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
})
