// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { listingHref, readListingState } from '@/blocks/Listing/state'

const keys = ['category', 'tag']

describe('readListingState', () => {
  it('reads filters, search, letter, sort and page', () => {
    const state = readListingState(
      { category: ['news', 'events'], tag: 'ai', q: ' search ', letter: 'B', sort: 'az', page: '3', person: 'dana' },
      '',
      keys,
    )
    expect(state).toEqual({
      terms: { category: ['news', 'events'], tag: ['ai'] },
      person: 'dana',
      q: 'search',
      letter: 'B',
      sort: 'az',
      page: 3,
    })
  })

  it('only reads its own prefixed params', () => {
    const state = readListingState({ category: 'news', l2_category: 'events', l2_page: '2' }, 'l2_', keys)
    expect(state.terms).toEqual({ category: ['events'] })
    expect(state.page).toBe(2)
  })

  it('ignores unknown sorts, bad pages and bad dates', () => {
    const state = readListingState({ sort: 'random', page: '-4', from: 'tomorrow', when: 'soon' }, '', keys)
    expect(state.sort).toBeUndefined()
    expect(state.page).toBe(1)
    expect(state.from).toBeUndefined()
    expect(state.when).toBeUndefined()
  })

  it('reads event date filters', () => {
    const state = readListingState({ when: 'past', from: '2026-01-01', to: '2026-12-31' }, '', [])
    expect(state).toMatchObject({ when: 'past', from: '2026-01-01', to: '2026-12-31' })
  })
})

describe('listingHref', () => {
  it('writes the state back with the prefix and keeps other params', () => {
    const current = { other: 'x', l2_q: 'old' }
    const href = listingHref('/blog', current, 'l2_', { terms: { category: ['news'] }, q: 'new', page: 2 })
    const url = new URL(href, 'http://x')
    expect(url.pathname).toBe('/blog')
    expect(url.searchParams.get('other')).toBe('x')
    expect(url.searchParams.get('l2_category')).toBe('news')
    expect(url.searchParams.get('l2_q')).toBe('new')
    expect(url.searchParams.get('l2_page')).toBe('2')
  })

  it('drops page 1 and empty values', () => {
    expect(listingHref('/blog', {}, '', { terms: { category: [] }, page: 1 })).toBe('/blog')
  })
})
