import type { VisibilityCondition } from '../types'

export const urlParamCondition: VisibilityCondition = {
  slug: 'url',
  label: 'URL parameter',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'url_param', label: 'Parameter', type: 'text', admin: { width: '50%', placeholder: 'utm_campaign' } },
        {
          name: 'url_value',
          label: 'Value (empty = any)',
          type: 'text',
          admin: { width: '50%', placeholder: 'black-friday' },
        },
      ],
    },
  ],
  evaluate: (row, { searchParams }) => {
    const raw = searchParams[String(row.url_param ?? '')]
    const values = Array.isArray(raw) ? raw : raw != null ? [raw] : []
    if (!values.length) return false
    return !row.url_value || values.includes(String(row.url_value))
  },
}
