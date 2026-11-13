// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import { getRouteAlternates, resolveRoute } from '@/lib/queries/content'
import type { SiteSetting } from '@/payload-types'

let payload: Payload
const s = Date.now()
let postId: number
let enOnlyId: number
let pageId: number
let previousHeBases: SiteSetting['cptBases']

describe('resolveRoute', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
    const he = await payload.findGlobal({ slug: 'site-settings', locale: 'he', depth: 0 })
    previousHeBases = he.cptBases
    await payload.updateGlobal({
      slug: 'site-settings',
      locale: 'he',
      data: { siteName: he.siteName || 'Payload demo', cptBases: { ...he.cptBases, posts: 'בלוג' } },
    })

    const post = await payload.create({
      collection: 'posts',
      locale: 'en',
      data: { title: `Resolve ${s}`, slug: `resolve-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'posts',
      id: post.id,
      locale: 'he',
      data: { title: `פתרון ${s}`, slug: `pitaron-${s}`, _status: 'published' },
    })
    postId = post.id

    const enOnly = await payload.create({
      collection: 'posts',
      locale: 'en',
      data: { title: `English only ${s}`, slug: `en-only-${s}`, _status: 'published' },
    })
    enOnlyId = enOnly.id

    const page = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Blog-like page ${s}`, slug: `pagey-${s}`, _status: 'published' },
    })
    pageId = page.id
  })

  afterAll(async () => {
    await payload.updateGlobal({ slug: 'site-settings', locale: 'he', data: { cptBases: previousHeBases } })
    await payload.delete({ collection: 'posts', where: { id: { in: [postId, enOnlyId] } } })
    await payload.delete({ collection: 'pages', id: pageId })
  })

  it('resolves a CPT item under its English base', async () => {
    const route = await resolveRoute(`/blog/resolve-${s}`, 'en')
    expect(route?.kind).toBe('item')
    expect(route?.kind === 'item' && route.collection).toBe('posts')
    expect(route?.doc.id).toBe(postId)
  })

  it('resolves the Hebrew item under the translated base', async () => {
    const route = await resolveRoute(`/בלוג/pitaron-${s}`, 'he')
    expect(route?.doc.title).toBe(`פתרון ${s}`)
  })

  it('does not resolve an item that is not published in that language', async () => {
    expect(await resolveRoute(`/בלוג/en-only-${s}`, 'he')).toBeNull()
  })

  it('still resolves pages', async () => {
    const route = await resolveRoute(`/pagey-${s}`, 'en')
    expect(route?.kind).toBe('page')
    expect(route?.doc.id).toBe(pageId)
  })

  it('builds alternates for items, with the home page as fallback', async () => {
    const both = await resolveRoute(`/blog/resolve-${s}`, 'en')
    expect(await getRouteAlternates(both!)).toEqual({
      en: `/blog/resolve-${s}`,
      he: `/he/בלוג/pitaron-${s}`,
    })
    const enOnly = await resolveRoute(`/blog/en-only-${s}`, 'en')
    expect(await getRouteAlternates(enOnly!)).toEqual({ en: `/blog/en-only-${s}`, he: '/he' })
  })
})
