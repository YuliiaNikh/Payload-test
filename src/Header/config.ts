import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'subItems',
          type: 'array',
          admin: {
            description: 'Optional dropdown links shown under this item.',
            initCollapsed: true,
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    link({
      appearances: false,
      overrides: {
        name: 'donateLink',
        label: 'Donate button',
      },
    }),
    {
      name: 'dedication',
      type: 'text',
      admin: {
        description: 'Shown in the teal bar under the header. Leave empty to hide it.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
