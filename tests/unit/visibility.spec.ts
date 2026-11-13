// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { defaultCptBases } from '@/content/types'
import { evaluateVisibility } from '@/visibility/evaluate'
import type { VisibilityContext } from '@/visibility/types'

const now = new Date('2026-11-13T12:00:00.000Z')
const ctx = (extra: Partial<VisibilityContext> = {}): VisibilityContext => ({
  locale: 'en',
  bases: defaultCptBases,
  homeId: null,
  pathname: '/x',
  searchParams: {},
  now,
  ...extra,
})

const event = (doc: Record<string, unknown>) => ({ item: { collection: 'events' as const, doc: doc as never } })

describe('evaluateVisibility', () => {
  it('shows blocks without conditions', async () => {
    expect(await evaluateVisibility(undefined, ctx())).toEqual({ visible: true, classes: [] })
  })

  it('turns device rules into CSS classes', async () => {
    const result = await evaluateVisibility({ rules: [{ type: 'device', device_show: ['desktop'] }] }, ctx())
    expect(result).toEqual({ visible: true, classes: ['hide-on-tablet', 'hide-on-mobile'] })
  })

  it('checks date windows', async () => {
    const open = { type: 'date', date_from: '2026-11-01T00:00:00Z', date_until: '2026-11-30T00:00:00Z' }
    const later = { type: 'date', date_from: '2026-12-01T00:00:00Z' }
    expect((await evaluateVisibility({ rules: [open] }, ctx())).visible).toBe(true)
    expect((await evaluateVisibility({ rules: [later] }, ctx())).visible).toBe(false)
  })

  it('checks URL parameters with and without a value', async () => {
    const any = { type: 'url', url_param: 'utm_campaign' }
    const exact = { type: 'url', url_param: 'utm_campaign', url_value: 'bf' }
    const params = { searchParams: { utm_campaign: 'bf' } }
    expect((await evaluateVisibility({ rules: [any] }, ctx())).visible).toBe(false)
    expect((await evaluateVisibility({ rules: [any] }, ctx(params))).visible).toBe(true)
    expect((await evaluateVisibility({ rules: [exact] }, ctx({ searchParams: { utm_campaign: 'x' } }))).visible).toBe(false)
  })

  it('checks fields of the current item', async () => {
    const future = { type: 'field', field_name: 'startDate', field_operator: 'future' }
    const hasSpeakers = { type: 'field', field_name: 'speakers', field_operator: 'set' }
    const equals = { type: 'field', field_name: 'location', field_operator: 'equals', field_value: 'Tel Aviv' }
    const doc = { startDate: '2026-12-01T10:00:00Z', speakers: [], location: 'Tel Aviv' }
    expect((await evaluateVisibility({ rules: [future] }, ctx(event(doc)))).visible).toBe(true)
    expect((await evaluateVisibility({ rules: [hasSpeakers] }, ctx(event(doc)))).visible).toBe(false)
    expect((await evaluateVisibility({ rules: [equals] }, ctx(event(doc)))).visible).toBe(true)
    expect((await evaluateVisibility({ rules: [future] }, ctx())).visible).toBe(false)
  })

  it('combines conditions with all or any', async () => {
    const yes = { type: 'url', url_param: 'a' }
    const no = { type: 'url', url_param: 'b' }
    const c = ctx({ searchParams: { a: '1' } })
    expect((await evaluateVisibility({ match: 'all', rules: [yes, no] }, c)).visible).toBe(false)
    expect((await evaluateVisibility({ match: 'any', rules: [yes, no] }, c)).visible).toBe(true)
  })
})
