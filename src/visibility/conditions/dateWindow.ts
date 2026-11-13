import type { VisibilityCondition } from '../types'

export const dateWindowCondition: VisibilityCondition = {
  slug: 'date',
  label: 'Date window',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'date_from', label: 'Show from', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' } },
        { name: 'date_until', label: 'Show until', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' } },
      ],
    },
  ],
  evaluate: (row, { now }) => {
    const from = typeof row.date_from === 'string' ? new Date(row.date_from) : null
    const until = typeof row.date_until === 'string' ? new Date(row.date_until) : null
    return (!from || now >= from) && (!until || now <= until)
  },
}
