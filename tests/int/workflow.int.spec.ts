// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import { resolveRoute } from '@/lib/queries/content'

let payload: Payload
const s = Date.now()
const ids: number[] = []

describe('drafts and scheduling', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
  })

  afterAll(async () => {
    await payload.delete({ collection: 'pages', where: { id: { in: ids } } })
  })

  it('serves the published version normally and the latest draft in preview', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: `Live ${s}`, slug: `wf-${s}`, _status: 'published' },
    })
    ids.push(page.id)
    await payload.update({ collection: 'pages', id: page.id, draft: true, data: { title: `Draft ${s}`, _status: 'draft' } })

    expect((await resolveRoute(`/wf-${s}`, 'en'))?.doc.title).toBe(`Live ${s}`)
    expect((await resolveRoute(`/wf-${s}`, 'en', true))?.doc.title).toBe(`Draft ${s}`)
  })

  it('previews pages that were never published', async () => {
    const page = await payload.create({
      collection: 'pages',
      draft: true,
      data: { title: `Unpublished ${s}`, slug: `wf-new-${s}`, _status: 'draft' },
    })
    ids.push(page.id)
    expect(await resolveRoute(`/wf-new-${s}`, 'en')).toBeNull()
    expect((await resolveRoute(`/wf-new-${s}`, 'en', true))?.doc.id).toBe(page.id)
  })

  it('publishes a scheduled page in one language when its job runs', async () => {
    const page = await payload.create({
      collection: 'pages',
      draft: true,
      data: { title: `Scheduled ${s}`, slug: `wf-sched-${s}`, _status: 'draft' },
    })
    ids.push(page.id)
    await payload.jobs.queue({
      task: 'schedulePublish',
      input: { type: 'publish', doc: { relationTo: 'pages', value: page.id }, locale: 'en' },
      waitUntil: new Date(Date.now() - 1000),
    })
    await payload.jobs.run({ allQueues: true })

    expect((await resolveRoute(`/wf-sched-${s}`, 'en'))?.doc.id).toBe(page.id)
    expect(await resolveRoute(`/wf-sched-${s}`, 'he')).toBeNull()
  })
})
