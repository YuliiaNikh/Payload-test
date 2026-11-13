import { sectionBlock } from '@/fields/blockStyle'

export const RichTextBlock = sectionBlock({
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: { singular: 'Text', plural: 'Text' },
  fields: [
    { name: 'content', type: 'richText', required: true },
    {
      name: 'width',
      type: 'select',
      defaultValue: 'narrow',
      options: [
        { label: 'Reading width', value: 'narrow' },
        { label: 'Full container', value: 'wide' },
      ],
    },
  ],
})
