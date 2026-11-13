import type { Where } from 'payload'

import { cptDateField, cptPersonField, cptTaxonomies, type CptSlug } from '@/content/types'

import type { ListingState, SortKey } from './state'

type Input = {
  collection: CptSlug
  state: ListingState
  // filter key -> term ids resolved from the slugs in the URL
  termIds: Record<string, number[]>
  // relationship field -> ids fixed by the editor (or by a term archive)
  fixedTermIds?: Record<string, number[]>
  // relationship field -> ids from a term archive URL; ANDed on top of the fixed terms
  presetTermIds?: Record<string, number[]>
  fixedWhen?: 'upcoming' | 'past' | 'all' | null
  personId?: number | null
  excludeId?: number | null
  // relationship field -> ids of the current item, for "related items"
  relatedTermIds?: Record<string, number[]>
  now: Date
}

const nothing: Where = { id: { equals: -1 } }

export function buildListingWhere(input: Input): Where & { and: Where[] } {
  const { collection, state, now } = input
  const and: Where[] = [{ _status: { equals: 'published' } }]
  const taxonomies = cptTaxonomies[collection]
  const dateField = cptDateField[collection]

  for (const [field, ids] of Object.entries(input.fixedTermIds ?? {})) {
    if (ids.length) and.push({ [field]: { in: ids } })
  }

  for (const [field, ids] of Object.entries(input.presetTermIds ?? {})) {
    if (ids.length) and.push({ [field]: { in: ids } })
  }

  for (const [key, slugs] of Object.entries(state.terms)) {
    const tax = taxonomies.find((t) => t.key === key)
    if (!tax || !slugs.length) continue
    const ids = input.termIds[key] ?? []
    and.push(ids.length ? { [tax.field]: { in: ids } } : nothing)
  }

  const when = state.when ?? (input.fixedWhen !== 'all' ? input.fixedWhen : undefined)
  if (when === 'upcoming') and.push({ [dateField]: { greater_than_equal: now.toISOString() } })
  if (when === 'past') and.push({ [dateField]: { less_than: now.toISOString() } })
  if (state.from) and.push({ [dateField]: { greater_than_equal: `${state.from}T00:00:00.000Z` } })
  if (state.to) and.push({ [dateField]: { less_than_equal: `${state.to}T23:59:59.999Z` } })

  if (state.q) and.push({ or: [{ title: { like: state.q } }, { excerpt: { like: state.q } }] })
  if (state.letter) and.push({ letter: { equals: state.letter } })

  const personField = cptPersonField[collection]
  if (state.person && personField) and.push(input.personId ? { [personField]: { in: [input.personId] } } : nothing)

  if (input.excludeId) and.push({ id: { not_equals: input.excludeId } })

  if (input.relatedTermIds) {
    const or = Object.entries(input.relatedTermIds)
      .filter(([, ids]) => ids.length)
      .map(([field, ids]) => ({ [field]: { in: ids } }))
    and.push(or.length ? { or } : nothing)
  }

  return { and }
}

export function buildListingSort(collection: CptSlug, sort: SortKey): string {
  const dateField = cptDateField[collection]
  switch (sort) {
    case 'newest':
      return `-${dateField}`
    case 'oldest':
      return dateField
    case 'az':
      return 'title'
    case 'za':
      return '-title'
    case 'updated':
      return '-updatedAt'
  }
}
