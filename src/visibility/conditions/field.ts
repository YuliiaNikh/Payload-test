import { itemFieldNames } from '@/content/types'

import type { VisibilityCondition } from '../types'

const isEmpty = (value: unknown) =>
  value == null || value === '' || (Array.isArray(value) && value.length === 0)

// JetEngine-style: show only if a field of the current item matches (only on CPT items)
export const fieldCondition: VisibilityCondition = {
  slug: 'field',
  label: 'Field of the current item',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'field_name',
          label: 'Field',
          type: 'select',
          options: [...itemFieldNames, 'speakers', 'categories', 'tags', 'featuredImage'].map((value) => ({ label: value, value })),
          admin: { width: '34%' },
        },
        {
          name: 'field_operator',
          label: 'Is',
          type: 'select',
          defaultValue: 'set',
          options: [
            { label: 'not empty', value: 'set' },
            { label: 'empty', value: 'empty' },
            { label: 'equal to', value: 'equals' },
            { label: 'a date in the future', value: 'future' },
          ],
          admin: { width: '33%' },
        },
        { name: 'field_value', label: 'Value', type: 'text', admin: { width: '33%' } },
      ],
    },
  ],
  evaluate: (row, ctx) => {
    if (!ctx.item) return false
    const value = (ctx.item.doc as unknown as Record<string, unknown>)[String(row.field_name)]
    switch (row.field_operator) {
      case 'empty':
        return isEmpty(value)
      case 'equals':
        return String(value ?? '') === String(row.field_value ?? '')
      case 'future':
        return typeof value === 'string' && new Date(value) > ctx.now
      default:
        return !isEmpty(value)
    }
  },
}
