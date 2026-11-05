import type { Block } from 'payload'

export const Impact: Block = {
  slug: 'impact',
  interfaceName: 'ImpactBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          admin: {
            description: 'For example "2,321" or "10 Million".',
          },
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      maxRows: 4,
    },
    {
      name: 'testimonials',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          name: 'detail',
          type: 'text',
          admin: {
            description: 'For example the program and year, "Year ’03".',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Impact sections',
    singular: 'Impact section',
  },
}
