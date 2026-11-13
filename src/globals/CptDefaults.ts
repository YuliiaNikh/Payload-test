import type { GlobalConfig } from 'payload'

import { isAdmin } from '@/access/roles'
import { cptSlugs } from '@/content/types'
import { layoutField } from '@/fields/layout'

const labels: Record<(typeof cptSlugs)[number], string> = {
  posts: 'Blog posts',
  events: 'Events',
  resources: 'Resources',
  glossary: 'Glossary',
  people: 'People',
}

// Like an Elementor Theme Builder single template: sections shown after every item of a type
export const CptDefaults: GlobalConfig = {
  slug: 'cpt-defaults',
  label: 'Item defaults',
  admin: { description: 'Sections added after every item of each content type.' },
  access: { read: () => true, update: isAdmin },
  fields: [
    {
      type: 'tabs',
      tabs: cptSlugs.map((cpt) => ({
        name: cpt,
        label: labels[cpt],
        fields: [layoutField({ name: 'after', label: 'After the item' })],
      })),
    },
  ],
}
