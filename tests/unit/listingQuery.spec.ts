// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { buildListingSort, buildListingWhere } from '@/blocks/Listing/query'

const now = new Date('2026-11-13T10:00:00.000Z')
const base = { collection: 'posts' as const, state: { terms: {}, page: 1 }, termIds: {}, now }
const published = { _status: { equals: 'published' } }

describe('buildListingWhere', () => {
  it('always filters published items', () => {
    expect(buildListingWhere(base)).toEqual({ and: [published] })
  })

  it('filters by resolved term ids per taxonomy field', () => {
    const where = buildListingWhere({ ...base, state: { terms: { category: ['news'] }, page: 1 }, termIds: { category: [3, 4] } })
    expect(where.and).toContainEqual({ categories: { in: [3, 4] } })
  })

  it('matches nothing when a filter slug does not exist', () => {
    const where = buildListingWhere({ ...base, state: { terms: { tag: ['nope'] }, page: 1 }, termIds: { tag: [] } })
    expect(where.and).toContainEqual({ id: { equals: -1 } })
  })

  it('adds fixed terms on the matching field', () => {
    const where = buildListingWhere({ ...base, fixedTermIds: { categories: [9] } })
    expect(where.and).toContainEqual({ categories: { in: [9] } })
  })

  it('narrows fixed terms further with a term archive preset', () => {
    const where = buildListingWhere({ ...base, fixedTermIds: { categories: [1, 2] }, presetTermIds: { categories: [1] } })
    expect(where.and).toContainEqual({ categories: { in: [1, 2] } })
    expect(where.and).toContainEqual({ categories: { in: [1] } })
  })

  it('splits events into upcoming and past by start date', () => {
    const upcoming = buildListingWhere({ ...base, collection: 'events', state: { terms: {}, when: 'upcoming', page: 1 } })
    expect(upcoming.and).toContainEqual({ startDate: { greater_than_equal: now.toISOString() } })
    const past = buildListingWhere({ ...base, collection: 'events', fixedWhen: 'past' })
    expect(past.and).toContainEqual({ startDate: { less_than: now.toISOString() } })
  })

  it('filters a date range on the CPT date field, inclusive of the end day', () => {
    const where = buildListingWhere({ ...base, state: { terms: {}, from: '2026-01-01', to: '2026-01-31', page: 1 } })
    expect(where.and).toContainEqual({ publishedDate: { greater_than_equal: '2026-01-01T00:00:00.000Z' } })
    expect(where.and).toContainEqual({ publishedDate: { less_than_equal: '2026-01-31T23:59:59.999Z' } })
  })

  it('searches title and excerpt, and filters by letter and person', () => {
    const where = buildListingWhere({
      ...base,
      state: { terms: {}, q: 'ai', letter: 'B', person: 'dana', page: 1 },
      personId: 7,
    })
    expect(where.and).toContainEqual({ or: [{ title: { like: 'ai' } }, { excerpt: { like: 'ai' } }] })
    expect(where.and).toContainEqual({ letter: { equals: 'B' } })
    expect(where.and).toContainEqual({ author: { in: [7] } })
  })

  it('matches nothing for an unknown person', () => {
    const where = buildListingWhere({ ...base, state: { terms: {}, person: 'ghost', page: 1 }, personId: null })
    expect(where.and).toContainEqual({ id: { equals: -1 } })
  })

  it('excludes the current item and can require a shared term with it', () => {
    const where = buildListingWhere({
      ...base,
      excludeId: 5,
      relatedTermIds: { categories: [1], tags: [] },
    })
    expect(where.and).toContainEqual({ id: { not_equals: 5 } })
    expect(where.and).toContainEqual({ or: [{ categories: { in: [1] } }] })
  })
})

describe('buildListingSort', () => {
  it('sorts by the CPT date field or title', () => {
    expect(buildListingSort('posts', 'newest')).toBe('-publishedDate')
    expect(buildListingSort('events', 'oldest')).toBe('startDate')
    expect(buildListingSort('glossary', 'az')).toBe('title')
    expect(buildListingSort('people', 'za')).toBe('-title')
    expect(buildListingSort('resources', 'updated')).toBe('-updatedAt')
  })
})
