// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'

let payload: Payload
const s = Date.now()
const ids: number[] = []

describe('page templates', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
  })

  afterAll(async () => {
    await payload.delete({ collection: 'pages', where: { id: { in: ids } } })
  })

  it('fills a new landing page with the landing sections', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: `Landing ${s}`, slug: `landing-${s}`, template: 'landing' },
    })
    ids.push(page.id)
    expect(page.layout?.map((block) => block.blockType)).toEqual(['hero', 'cards', 'faq', 'cta'])
  })

  it('leaves a blank page empty', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: `Blank ${s}`, slug: `blank-${s}`, template: 'blank' },
    })
    ids.push(page.id)
    expect(page.layout ?? []).toEqual([])
  })

  it('keeps sections the editor already added', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: {
        title: `Own ${s}`,
        slug: `own-${s}`,
        template: 'landing',
        layout: [{ blockType: 'cta', heading: 'Mine' }],
      },
    })
    ids.push(page.id)
    expect(page.layout?.map((block) => block.blockType)).toEqual(['cta'])
  })
})
