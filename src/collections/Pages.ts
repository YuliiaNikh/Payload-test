import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { appearanceField } from '@/fields/appearance'
import { layoutField } from '@/fields/layout'
import { previewLinkField } from '@/fields/previewLink'
import { slugField } from '@/fields/slug'
import { autoRedirectHooks } from '@/hooks/autoRedirect'
import { pageTemplateOptions, pageTemplates, type PageTemplate } from '@/templates/pageTemplates'

import { localizedDrafts } from './shared/drafts'

// A new page starts from its template's sections (only when the layout is still empty)
const applyTemplate: CollectionBeforeChangeHook = ({ data, operation }) => {
  const template = data.template as PageTemplate | undefined
  if (operation !== 'create' || !template || template === 'blank' || data.layout?.length) return data
  return { ...data, layout: structuredClone(pageTemplates[template]) }
}

const pagesRedirects = autoRedirectHooks('pages')

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  access: {
    read: publishedOrStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  versions: localizedDrafts,
  hooks: {
    beforeChange: [applyTemplate, pagesRedirects.beforeChange],
    afterChange: [pagesRedirects.afterChange],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'template',
      type: 'select',
      defaultValue: 'blank',
      options: [...pageTemplateOptions],
      admin: {
        position: 'sidebar',
        description: 'Pre-fills the sections when the page is created.',
      },
    },
    layoutField(),
    appearanceField(),
    previewLinkField(),
  ],
}
