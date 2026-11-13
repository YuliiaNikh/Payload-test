import type { Field, GroupField } from 'payload'

import { visibilityConditions } from './registry'

// Show a condition's fields only on rows of its type
const forType = (slug: string, field: Field): Field => {
  if (field.type === 'row') return { ...field, fields: field.fields.map((f) => forType(slug, f)) }
  return { ...field, admin: { ...('admin' in field ? field.admin : {}), condition: (_: unknown, sibling: { type?: string } | undefined) => sibling?.type === slug } } as Field
}

export const visibilityField = (): GroupField => ({
  // Short names ("vis.rules") keep nested block table names under Postgres' 63-character limit
  name: 'vis',
  label: false,
  type: 'group',
  fields: [
    {
      name: 'match',
      label: 'Show this block when',
      type: 'radio',
      defaultValue: 'all',
      options: [
        { label: 'all conditions match', value: 'all' },
        { label: 'any condition matches', value: 'any' },
      ],
      admin: { layout: 'horizontal' },
    },
    {
      name: 'rules',
      label: 'Conditions',
      type: 'array',
      admin: { initCollapsed: false, description: 'No conditions = always visible. Device rules apply on top.' },
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: visibilityConditions.map((c) => ({ label: c.label, value: c.slug })),
        },
        ...visibilityConditions.flatMap((c) => c.fields.map((f) => forType(c.slug, f))),
      ],
    },
  ],
})
