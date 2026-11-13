import { sectionBlock } from '@/fields/blockStyle'
import { linksField } from '@/fields/link'

export const HeroBlock = sectionBlock({
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'text', type: 'textarea' },
    linksField(),
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'split',
      options: [
        { label: 'Text beside image', value: 'split' },
        { label: 'Centered', value: 'centered' },
      ],
    },
  ],
})
