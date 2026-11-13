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
      type: 'row',
      fields: [
        { name: 'defaultHeader', type: 'relationship', relationTo: 'headers', admin: { width: '50%' } },
        { name: 'defaultFooter', type: 'relationship', relationTo: 'footers', admin: { width: '50%' } },
      ],
    },
    {
      name: 'seo',
      label: 'SEO defaults',
      type: 'group',
      fields: [
        {
          name: 'titlePattern',
          type: 'text',
          localized: true,
          defaultValue: '%title% | %site%',
          admin: { description: 'Used when a page has no SEO title. %title% = page title, %site% = site name.' },
        },
        { name: 'description', label: 'Default meta description', type: 'textarea', localized: true },
        { name: 'image', label: 'Default social image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'hubspot',
      label: 'HubSpot',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'portalId', label: 'Portal ID', type: 'text', admin: { width: '40%' } },
            {
              name: 'region',
              type: 'select',
              defaultValue: 'na1',
              options: [
                { label: 'North America (na1)', value: 'na1' },
                { label: 'Europe (eu1)', value: 'eu1' },
              ],
              admin: { width: '30%' },
            },
            { name: 'tracking', label: 'Load tracking code', type: 'checkbox', admin: { width: '30%' } },
          ],
        },
      ],
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
