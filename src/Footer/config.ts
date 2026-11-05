import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
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
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
        { name: 'tiktok', type: 'text', label: 'TikTok URL' },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        {
          name: 'form',
          type: 'relationship',
          admin: {
            description:
              'A form with an "email" field. Signups appear under Form Submissions. Leave empty to hide the signup.',
          },
          relationTo: 'forms',
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Sign up for our newsletter!',
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: 'Sign me up',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
