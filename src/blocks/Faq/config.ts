import { sectionBlock } from '@/fields/blockStyle'

export const FaqBlock = sectionBlock({
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'richText' },
      ],
    },
  ],
})
