// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'

let payload: Payload
const s = Date.now()
const ids: Record<string, number[]> = { people: [], posts: [], events: [], categories: [] }

describe('relations', () => {
  let personId: number

  beforeAll(async () => {
    payload = await getPayload({ config })
    const person = await payload.create({
      collection: 'people',
      data: { title: `Rel Person ${s}`, _status: 'published' },
    })
    personId = person.id
    ids.people.push(person.id)

    const post = await payload.create({
      collection: 'posts',
      data: { title: `Rel Post ${s}`, author: person.id, _status: 'published' },
    })
    ids.posts.push(post.id)

    const event = await payload.create({
      collection: 'events',
      data: {
        title: `Rel Event ${s}`,
        startDate: new Date().toISOString(),
        speakers: [person.id],
        _status: 'published',
      },
    })
    ids.events.push(event.id)
  })

  afterAll(async () => {
    for (const collection of ['posts', 'events', 'people', 'categories'] as const) {
      if (ids[collection].length) {
        await payload.delete({ collection, where: { id: { in: ids[collection] } } })
      }
    }
  })

  it('lists a person’s posts and events through join fields', async () => {
    const person = await payload.findByID({ collection: 'people', id: personId, depth: 0 })
    expect(person.posts?.docs).toHaveLength(1)
    expect(person.events?.docs).toHaveLength(1)
  })

  it('builds category breadcrumbs from the parent', async () => {
    const parent = await payload.create({ collection: 'categories', data: { title: `News ${s}` } })
    const child = await payload.create({
      collection: 'categories',
      data: { title: `Company ${s}`, parent: parent.id },
    })
    ids.categories.push(child.id, parent.id)
    expect(child.breadcrumbs?.map((b) => b.url)).toEqual([`/news-${s}`, `/news-${s}/company-${s}`])
  })
})
