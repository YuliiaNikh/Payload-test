import { cptSlugs, cptTaxonomies, taxonomySlugs } from '@/content/types'
import { sectionBlock } from '@/fields/blockStyle'

import { sortKeys } from './state'

const filterKeys = [...new Set(Object.values(cptTaxonomies).flatMap((list) => list.map((t) => t.key)))]

const isEvents = (_: unknown, sibling: { collection?: string } | undefined, ctx?: { blockData?: { collection?: string } }) =>
  (ctx?.blockData?.collection ?? sibling?.collection) === 'events'

// JetEngine listing grid + query builder + JetSmartFilters in one block
export const ListingBlock = sectionBlock({
  slug: 'listing',
  interfaceName: 'ListingBlock',
  labels: { singular: 'Listing', plural: 'Listings' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      type: 'collapsible',
      label: 'What to show',
      fields: [
        {
          name: 'collection',
          label: 'Content type',
          type: 'select',
          required: true,
          defaultValue: 'posts',
          options: cptSlugs.map((value) => ({ label: value, value })),
        },
        {
          name: 'fixedTerms',
          label: 'Only items with these terms',
          type: 'relationship',
          relationTo: [...taxonomySlugs],
          hasMany: true,
        },
        {
          name: 'when',
          label: 'Events',
          type: 'select',
          defaultValue: 'all',
          options: [
            { label: 'All', value: 'all' },
            { label: 'Upcoming only', value: 'upcoming' },
            { label: 'Past only', value: 'past' },
          ],
          admin: { condition: (data, sibling, ctx) => isEvents(data, sibling, ctx as never) },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'relatedToCurrent',
              label: 'Related to the current item (shares a term)',
              type: 'checkbox',
              admin: { width: '50%' },
            },
            { name: 'excludeCurrent', label: 'Exclude the current item', type: 'checkbox', defaultValue: true, admin: { width: '50%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'perPage', label: 'Items per page', type: 'number', defaultValue: 9, min: 1, max: 48, admin: { width: '50%' } },
            {
              name: 'defaultSort',
              type: 'select',
              defaultValue: 'newest',
              options: sortKeys.map((value) => ({ label: value, value })),
              admin: { width: '50%' },
            },
          ],
        },
      ],
    },
    {
      name: 'filters',
      label: 'Filters for visitors',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'select',
              required: true,
              options: [
                { label: 'Taxonomy', value: 'taxonomy' },
                { label: 'Author / speaker', value: 'person' },
                { label: 'Upcoming / past + date range', value: 'date' },
                { label: 'Keyword search', value: 'search' },
                { label: 'A–Z letters', value: 'az' },
                { label: 'Sort', value: 'sort' },
              ],
              admin: { width: '34%' },
            },
            {
              name: 'taxonomy',
              type: 'select',
              options: filterKeys.map((value) => ({ label: value, value })),
              admin: { width: '33%', condition: (_, sibling) => sibling?.type === 'taxonomy' },
            },
            {
              name: 'display',
              type: 'select',
              defaultValue: 'tabs',
              options: [
                { label: 'Tabs', value: 'tabs' },
                { label: 'Dropdown', value: 'select' },
                { label: 'Checkboxes (multiple)', value: 'checkboxes' },
              ],
              admin: { width: '33%', condition: (_, sibling) => sibling?.type === 'taxonomy' },
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'cardStyle',
          type: 'select',
          defaultValue: 'standard',
          options: [
            { label: 'Standard', value: 'standard' },
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Compact', value: 'compact' },
            { label: 'Person', value: 'person' },
            { label: 'Event', value: 'event' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'grid3',
          options: [
            { label: 'Grid, 2 columns', value: 'grid2' },
            { label: 'Grid, 3 columns', value: 'grid3' },
            { label: 'Grid, 4 columns', value: 'grid4' },
            { label: 'List', value: 'list' },
            { label: 'Slider', value: 'slider' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'paging',
          type: 'select',
          defaultValue: 'numbers',
          options: [
            { label: 'Page numbers', value: 'numbers' },
            { label: 'Load more', value: 'loadMore' },
            { label: 'None', value: 'none' },
          ],
          admin: { width: '33%' },
        },
      ],
    },
  ],
})
