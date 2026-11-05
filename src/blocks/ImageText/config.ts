import type { Block } from 'payload'

import { pardesAppearances } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'

export const ImageText: Block = {
  slug: 'imageText',
  interfaceName: 'ImageTextBlock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'imagePosition',
          type: 'select',
          defaultValue: 'left',
          options: [
            { label: 'Image on the left', value: 'left' },
            { label: 'Image on the right', value: 'right' },
          ],
          required: true,
        },
        {
          name: 'imageWidth',
          type: 'select',
          defaultValue: 'half',
          options: [
            { label: '1/2', value: 'half' },
            { label: '1/3', value: 'third' },
            { label: '1/4', value: 'quarter' },
          ],
          required: true,
        },
        {
          name: 'background',
          type: 'select',
          defaultValue: 'light',
          options: [
            { label: 'Light gray', value: 'light' },
            { label: 'Gray', value: 'gray' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            width: '70%',
          },
        },
        {
          name: 'headingStyle',
          type: 'select',
          admin: {
            width: '30%',
          },
          defaultValue: 'medium',
          options: [
            { label: 'Large, medium weight', value: 'medium' },
            { label: 'Bold', value: 'bold' },
          ],
        },
      ],
    },
    {
      name: 'body',
      type: 'textarea',
    },
    linkGroup({
      appearances: pardesAppearances,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Image & text sections',
    singular: 'Image & text',
  },
}
