import { sectionBlock } from '@/fields/blockStyle'

// JetEngine-style dynamic tag: shows a field of the item this block is placed on
export const dynamicFieldNames = ['title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle'] as const

export const DynamicFieldBlock = sectionBlock({
  slug: 'dynamicField',
  interfaceName: 'DynamicFieldBlock',
  labels: { singular: 'Dynamic field', plural: 'Dynamic fields' },
  fields: [
    { name: 'label', type: 'text', admin: { description: 'Shown before the value, e.g. "Event date:"' } },
    {
      name: 'field',
      type: 'select',
      required: true,
      options: dynamicFieldNames.map((value) => ({ label: value, value })),
      admin: { description: 'Only on CPT items. Fields the item does not have show nothing.' },
    },
    {
      name: 'format',
      type: 'select',
      defaultValue: 'text',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Heading', value: 'heading' },
        { label: 'Date', value: 'date' },
      ],
    },
  ],
})
