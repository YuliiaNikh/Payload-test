import type { GlobalConfig } from 'payload'

import { isAdmin } from '@/access/roles'

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
  ],
}
