import type { GroupField } from 'payload'

const choice = (name: 'header' | 'footer', relationTo: 'headers' | 'footers') => [
  {
    name,
    type: 'select' as const,
    defaultValue: 'default',
    options: [
      { label: 'Default', value: 'default' },
      { label: 'Choose another', value: 'custom' },
      { label: 'None', value: 'none' },
    ],
  },
  {
    name: `${name}Ref`,
    label: `Which ${name}`,
    type: 'relationship' as const,
    relationTo,
    admin: { condition: (_: unknown, sibling: Record<string, unknown> | undefined) => sibling?.[name] === 'custom' },
  },
]

// Elementor Theme Builder "display conditions", per page: default, another design, or none
export const appearanceField = (): GroupField => ({
  name: 'appearance',
  label: 'Page appearance',
  type: 'group',
  admin: { position: 'sidebar' },
  fields: [...choice('header', 'headers'), ...choice('footer', 'footers')],
})
