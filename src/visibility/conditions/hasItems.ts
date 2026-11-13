import { getPayload, type Where } from 'payload'

import { cptDateField, cptSlugs, type CptSlug } from '@/content/types'

import type { VisibilityCondition } from '../types'

// "Show the Upcoming events section only if there are upcoming events"
export const hasItemsCondition: VisibilityCondition = {
  slug: 'items',
  label: 'Content type has items',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'items_type',
          label: 'Content type',
          type: 'select',
          defaultValue: 'events',
          options: cptSlugs.map((value) => ({ label: value, value })),
          admin: { width: '50%' },
        },
        {
          name: 'items_when',
          label: 'Only',
          type: 'select',
          defaultValue: 'all',
          options: [
            { label: 'Any', value: 'all' },
            { label: 'Upcoming (by date)', value: 'upcoming' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
  ],
  evaluate: async (row, { locale, now }) => {
    const collection = (row.items_type ?? 'events') as CptSlug
    const and: Where[] = [{ _status: { equals: 'published' } }]
    if (row.items_when === 'upcoming') and.push({ [cptDateField[collection]]: { greater_than_equal: now.toISOString() } })
    // Imported lazily: the Payload config imports the blocks, which import this registry
    const { default: config } = await import('@payload-config')
    const payload = await getPayload({ config })
    const { totalDocs } = await payload.count({ collection, locale, where: { and } })
    return totalDocs > 0
  },
}
