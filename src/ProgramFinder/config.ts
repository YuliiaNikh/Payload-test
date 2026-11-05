import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateProgramFinder } from './hooks/revalidateProgramFinder'

export const ProgramFinder: GlobalConfig = {
  slug: 'programFinder',
  label: 'Program Finder',
  access: {
    read: () => true,
  },
  admin: {
    description: 'The floating "Find a program" chat on every page.',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'launcherLabel',
      type: 'text',
      defaultValue: 'Lets Find You a Program!',
      label: 'Button label',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Hi there 👋',
      label: 'Panel title',
    },
    {
      name: 'greeting',
      type: 'textarea',
      defaultValue: 'Hi!\nI’m here to help :)\nWhat program are you looking for?',
    },
    {
      name: 'options',
      type: 'array',
      admin: {
        description: 'Quick replies the visitor can pick, each with the programs it suggests.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          admin: {
            description:
              'What the visitor "says", e.g. "I’m looking for a short program, 2-3 months".',
          },
          required: true,
        },
        {
          name: 'reply',
          type: 'textarea',
          defaultValue: 'Here are some programs that might fit you:',
        },
        {
          name: 'programs',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          minRows: 1,
        },
      ],
    },
    {
      name: 'followUp',
      type: 'textarea',
      defaultValue: 'Do you want me to narrow it down or look at something else?',
      admin: {
        description: 'Shown after suggestions, above the quick replies.',
      },
    },
    {
      name: 'noMatch',
      type: 'textarea',
      defaultValue: 'I couldn’t find a program for that. Try one of these:',
      admin: {
        description: 'Shown when typed text matches no program.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateProgramFinder],
  },
}
