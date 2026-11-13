import { sectionBlock } from '@/fields/blockStyle'
import { linksField } from '@/fields/link'

export const MediaTextBlock = sectionBlock({
  slug: 'mediaText',
  interfaceName: 'MediaTextBlock',
  labels: { singular: 'Media + text', plural: 'Media + text' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'content', type: 'richText' },
    linksField(),
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'start',
      options: [
        { label: 'Image first', value: 'start' },
        { label: 'Image last', value: 'end' },
      ],
    },
  ],
})
