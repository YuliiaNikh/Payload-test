import type { ArrayField, Field, GroupField } from 'payload'

import { cptSlugs } from '@/content/types'

export const buttonAppearances = ['primary', 'secondary', 'outline', 'ghost', 'link'] as const

type Options = { name?: string; label?: string; appearance?: boolean; required?: boolean }

// A link to a page or CPT item (follows renames) or to any URL
export const linkField = ({ name = 'link', label, appearance = true, required = false }: Options = {}): GroupField => ({
  name,
  label,
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'reference',
          options: [
            { label: 'Page or item', value: 'reference' },
            { label: 'Custom URL', value: 'custom' },
          ],
          admin: { layout: 'horizontal', width: '50%' },
        },
        { name: 'newTab', label: 'Open in new tab', type: 'checkbox', admin: { width: '50%' } },
      ],
    },
    {
      name: 'reference',
      type: 'relationship',
      relationTo: ['pages', ...cptSlugs],
      required,
      admin: { condition: (_, sibling) => sibling?.type !== 'custom' },
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required,
      admin: { condition: (_, sibling) => sibling?.type === 'custom' },
    },
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', admin: { width: '50%' } },
        ...(appearance
          ? [
              {
                name: 'appearance',
                type: 'select',
                defaultValue: 'primary',
                options: buttonAppearances.map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value })),
                admin: { width: '50%' },
              } satisfies Field,
            ]
          : []),
      ],
    },
  ],
})

export const linksField = ({ name = 'links', maxRows = 2 }: { name?: string; maxRows?: number } = {}): ArrayField => ({
  name,
  label: 'Buttons',
  type: 'array',
  maxRows,
  admin: { initCollapsed: true },
  fields: [linkField({ name: 'link', label: false as unknown as string })],
})
