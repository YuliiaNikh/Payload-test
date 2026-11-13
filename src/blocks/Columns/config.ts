import type { Block } from 'payload'

import { sectionBlock } from '@/fields/blockStyle'
import { linksField } from '@/fields/link'

// Small blocks that only live inside a column: the client's free-layout toolkit (approach A)
export const ColumnTextBlock: Block = {
  slug: 'colText',
  interfaceName: 'ColumnTextBlock',
  labels: { singular: 'Text', plural: 'Text' },
  fields: [{ name: 'content', type: 'richText', required: true }],
}

export const ColumnImageBlock: Block = {
  slug: 'colImage',
  interfaceName: 'ColumnImageBlock',
  labels: { singular: 'Image', plural: 'Images' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text' },
  ],
}

export const ColumnButtonsBlock: Block = {
  slug: 'colButtons',
  interfaceName: 'ColumnButtonsBlock',
  labels: { singular: 'Buttons', plural: 'Buttons' },
  fields: [linksField({ maxRows: 3 })],
}

export const columnBlockSlugs = ['colText', 'colImage', 'colButtons'] as const

export const ColumnsBlock = sectionBlock({
  slug: 'columns',
  interfaceName: 'ColumnsBlock',
  labels: { singular: 'Columns', plural: 'Columns' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'content',
          type: 'blocks',
          blocks: [],
          blockReferences: [...columnBlockSlugs],
        },
      ],
    },
  ],
})
