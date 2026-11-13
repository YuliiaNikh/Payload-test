// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'

let payload: Payload
const s = Date.now()
const ids = { pages: [] as number[], posts: [] as number[] }

const redirectsFrom = (from: string) =>
  payload.find({ collection: 'redirects', where: { from: { equals: from } }, depth: 0 }).then((r) => r.docs)

describe('automatic redirects on slug change', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
  })

  afterAll(async () => {
    await payload.delete({ collection: 'redirects', where: { from: { like: String(s) } } })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
    await payload.delete({ collection: 'posts', where: { id: { in: ids.posts } } })
  })

  it('redirects the old page URL to the page after a published rename', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: 'Old', slug: `old-page-${s}`, _status: 'published' },
    })
    ids.pages.push(page.id)
    await payload.update({ collection: 'pages', id: page.id, data: { slug: `new-page-${s}`, _status: 'published' } })

    const [redirect] = await redirectsFrom(`/old-page-${s}`)
    expect(redirect?.type).toBe('301')
    expect(redirect?.to?.reference).toEqual({ relationTo: 'pages', value: page.id })
  })

  it('handles CPT items and the Hebrew prefix', async () => {
    const post = await payload.create({
      collection: 'posts',
      locale: 'he',
      data: { title: 'ישן', slug: `yashan-${s}`, _status: 'published' },
    })
    ids.posts.push(post.id)
    await payload.update({ collection: 'posts', id: post.id, locale: 'he', data: { slug: `hadash-${s}`, _status: 'published' } })
    const he = await payload.findGlobal({ slug: 'site-settings', locale: 'he', depth: 0 })
    expect(await redirectsFrom(`/he/${he.cptBases.posts}/yashan-${s}`)).toHaveLength(1)
  })

  it('does nothing for drafts or unchanged slugs', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: 'Draft', slug: `draft-a-${s}`, _status: 'draft' },
      draft: true,
    })
    ids.pages.push(page.id)
    await payload.update({ collection: 'pages', id: page.id, draft: true, data: { slug: `draft-b-${s}`, _status: 'draft' } })
    expect(await redirectsFrom(`/draft-a-${s}`)).toHaveLength(0)
  })

  it('removes a redirect that would loop when the old URL is used again', async () => {
    const page = await payload.create({
      collection: 'pages',
      data: { title: 'Loop', slug: `loop-a-${s}`, _status: 'published' },
    })
    ids.pages.push(page.id)
    await payload.update({ collection: 'pages', id: page.id, data: { slug: `loop-b-${s}`, _status: 'published' } })
    await payload.update({ collection: 'pages', id: page.id, data: { slug: `loop-a-${s}`, _status: 'published' } })
    expect(await redirectsFrom(`/loop-a-${s}`)).toHaveLength(0)
    expect(await redirectsFrom(`/loop-b-${s}`)).toHaveLength(1)
  })
})
