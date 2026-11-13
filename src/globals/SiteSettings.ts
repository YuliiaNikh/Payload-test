import type { GlobalConfig } from 'payload'

import { isAdmin } from '@/access/roles'
import { cptSlugs, defaultCptBases } from '@/content/types'
import { slugify } from '@/utilities/slugify'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Payload demo',
    },
    {
      name: 'homePage',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        description: 'Shown at / (and /he in Hebrew), like "Your homepage displays" in WordPress.',
      },
    },
    {
      name: 'cptBases',
      label: 'URL bases',
      type: 'group',
      admin: {
        description: 'First part of the URL for each content type, per language (like WPML "translate slugs").',
      },
      fields: cptSlugs.map((cpt) => ({
        name: cpt,
        type: 'text' as const,
        localized: true,
        required: true,
        defaultValue: defaultCptBases[cpt],
        hooks: {
          beforeValidate: [({ value }: { value?: unknown }) => (typeof value === 'string' ? slugify(value) : value)],
        },
      })),
    },
  ],
}
