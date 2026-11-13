// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import { defaultCptBases } from '@/content/types'
import { evaluateVisibility } from '@/visibility/evaluate'

let payload: Payload
const s = Date.now()
let eventId: number

const ctx = { locale: 'en' as const, bases: defaultCptBases, homeId: null, pathname: '/', searchParams: {}, now: new Date() }

describe('"content type has items" condition', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
    const event = await payload.create({
      collection: 'events',
      data: {
        title: `Vis future ${s}`,
        slug: `vis-future-${s}`,
        startDate: new Date(Date.now() + 86_400_000 * 30).toISOString(),
        _status: 'published',
      },
    })
    eventId = event.id
  })

  afterAll(async () => {
    await payload.delete({ collection: 'events', id: eventId })
  })

  it('is true when published upcoming items exist', async () => {
    const result = await evaluateVisibility(
      { rules: [{ type: 'items', items_type: 'events', items_when: 'upcoming' }] },
      ctx,
    )
    expect(result.visible).toBe(true)
  })

  it('is false when nothing matches in that language', async () => {
    const result = await evaluateVisibility(
      { rules: [{ type: 'items', items_type: 'events', items_when: 'upcoming' }] },
      { ...ctx, locale: 'he', now: new Date('2999-01-01') },
    )
    expect(result.visible).toBe(false)
  })
})
