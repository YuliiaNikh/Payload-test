// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import {
  findPublishedPageByPath,
  getHomePageId,
  getPageAlternates,
} from '@/lib/queries/pages'
import type { Page, SiteSetting } from '@/payload-types'

let payload: Payload
const s = Date.now()
let parent: Page
let child: Page
let home: Page
let previousSettings: SiteSetting

describe('published page queries', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
    previousSettings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })

    home = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Home ${s}`, slug: `home-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'pages',
      id: home.id,
      locale: 'he',
      data: { title: `בית ${s}`, slug: `bait-${s}`, _status: 'published' },
    })

    parent = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `About ${s}`, slug: `about-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'pages',
      id: parent.id,
      locale: 'he',
      data: { title: `אודות ${s}`, slug: `אודות-${s}`, _status: 'published' },
    })

    // English only
    child = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Team ${s}`, slug: `team-${s}`, parent: parent.id, _status: 'published' },
    })

    await payload.updateGlobal({ slug: 'site-settings', data: { homePage: home.id } })
  })

  afterAll(async () => {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: { homePage: previousSettings.homePage ?? null },
    })
    await payload.delete({ collection: 'pages', where: { id: { in: [child.id, parent.id, home.id] } } })
  })

  it('finds a nested page by its full English path', async () => {
    const page = await findPublishedPageByPath(`/about-${s}/team-${s}`, 'en')
    expect(page?.id).toBe(child.id)
  })

  it('returns the parent, not the child, for the parent path', async () => {
    const page = await findPublishedPageByPath(`/about-${s}`, 'en')
    expect(page?.id).toBe(parent.id)
  })

  it('finds a page by its Hebrew slug', async () => {
    const page = await findPublishedPageByPath(`/אודות-${s}`, 'he')
    expect(page?.id).toBe(parent.id)
    expect(page?.title).toBe(`אודות ${s}`)
  })

  it('does not return a page that is not published in that language', async () => {
    expect(await findPublishedPageByPath(`/team-${s}`, 'he')).toBeNull()
    expect(await findPublishedPageByPath(`/אודות-${s}/team-${s}`, 'he')).toBeNull()
  })

  it('does not return a page that is only a draft', async () => {
    const draft = await payload.create({
      collection: 'pages',
      locale: 'en',
      draft: true,
      data: { title: `Draft ${s}`, slug: `draft-${s}`, _status: 'draft' },
    })
    expect(await findPublishedPageByPath(`/draft-${s}`, 'en')).toBeNull()
    await payload.delete({ collection: 'pages', id: draft.id })
  })

  it('serves the home page from Site settings at /', async () => {
    expect(await getHomePageId()).toBe(home.id)
    expect((await findPublishedPageByPath('/', 'en'))?.id).toBe(home.id)
    expect((await findPublishedPageByPath('/', 'he'))?.title).toBe(`בית ${s}`)
  })

  it('links each language version, falling back to that language home page', async () => {
    expect(await getPageAlternates(parent.id)).toEqual({
      en: `/about-${s}`,
      he: `/he/אודות-${s}`,
    })
    expect(await getPageAlternates(child.id)).toEqual({
      en: `/about-${s}/team-${s}`,
      he: '/he',
    })
    expect(await getPageAlternates(home.id)).toEqual({ en: '/', he: '/he' })
  })
})
