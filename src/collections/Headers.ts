import type { CollectionConfig, Field } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptSlugs } from '@/content/types'
import { linkField } from '@/fields/link'

import { localizedDrafts } from './shared/drafts'

export const menuIcons = ['none', 'star', 'chart', 'book', 'calendar', 'users', 'globe', 'bolt', 'shield', 'chat'] as const

const megaLink: Field[] = [
  linkField({ name: 'link', appearance: false }),
  { name: 'description', type: 'text' },
  {
    name: 'icon',
    type: 'select',
    defaultValue: 'none',
    options: menuIcons.map((value) => ({ label: value, value })),
  },
]

const menuItemFields: Field[] = [
  {
    type: 'row',
    fields: [
      { name: 'label', type: 'text', required: true, admin: { width: '50%' } },
      {
        name: 'type',
        type: 'select',
        defaultValue: 'link',
        options: [
          { label: 'Link', value: 'link' },
          { label: 'Dropdown', value: 'dropdown' },
          { label: 'Mega menu', value: 'mega' },
        ],
        admin: { width: '50%' },
      },
    ],
  },
  { ...linkField({ name: 'link', appearance: false }), admin: { condition: (_, s) => s?.type === 'link' } },
  {
    name: 'links',
    type: 'array',
    admin: { condition: (_, s) => s?.type === 'dropdown', initCollapsed: true },
    fields: [linkField({ name: 'link', appearance: false })],
  },
  {
    name: 'mega',
    type: 'group',
    admin: { condition: (_, s) => s?.type === 'mega' },
    fields: [
      {
        name: 'columns',
        type: 'array',
        maxRows: 4,
        admin: { initCollapsed: true },
        fields: [
          { name: 'heading', type: 'text' },
          { name: 'links', type: 'array', admin: { initCollapsed: true }, fields: megaLink },
        ],
      },
      {
        name: 'auto',
        label: 'Automatic column (latest items)',
        type: 'group',
        fields: [
          {
            type: 'row',
            fields: [
              { name: 'enabled', type: 'checkbox', admin: { width: '25%' } },
              { name: 'heading', type: 'text', admin: { width: '25%' } },
              {
                name: 'collection',
                type: 'select',
                defaultValue: 'posts',
                options: cptSlugs.map((value) => ({ label: value, value })),
                admin: { width: '25%' },
              },
              { name: 'count', type: 'number', defaultValue: 3, min: 1, max: 6, admin: { width: '25%' } },
            ],
          },
        ],
      },
      {
        name: 'promo',
        label: 'Promo card',
        type: 'group',
        fields: [
          { name: 'enabled', type: 'checkbox' },
          {
            type: 'collapsible',
            label: 'Card',
            admin: { condition: (_, s) => Boolean(s?.enabled) },
            fields: [
              { name: 'image', type: 'upload', relationTo: 'media' },
              { name: 'title', type: 'text' },
              { name: 'text', type: 'textarea' },
              linkField({ name: 'link', appearance: false }),
            ],
          },
        ],
      },
      linkField({ name: 'bottomLink', label: 'Bottom bar link', appearance: false }),
    ],
  },
]

export const Headers: CollectionConfig = {
  slug: 'headers',
  admin: {
    group: 'Site',
    useAsTitle: 'title',
    defaultColumns: ['title', 'variant', '_status', 'updatedAt'],
    description: 'Header designs with their menus. Site settings choose the default; pages can pick another.',
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  fields: [
    { name: 'title', type: 'text', required: true, admin: { description: 'Admin name, e.g. "Main header".' } },
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Minimal (logo + button)', value: 'minimal' },
            { label: 'Transparent over hero', value: 'transparent' },
          ],
          admin: { width: '50%' },
        },
        { name: 'showLanguageSwitcher', type: 'checkbox', defaultValue: true, admin: { width: '50%' } },
      ],
    },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    linkField({ name: 'cta', label: 'Header button' }),
    {
      name: 'menu',
      type: 'array',
      // Each language has its own menu tree (use "Copy to locale" to start from English)
      localized: true,
      admin: { initCollapsed: true, condition: (data) => data?.variant !== 'minimal' },
      fields: menuItemFields,
    },
  ],
}
