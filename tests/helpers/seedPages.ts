import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

export const e2ePages = {
  home: { en: 'E2E Home', he: 'בית E2E' },
  about: { en: { title: 'E2E About', slug: 'e2e-about' }, he: { title: 'אודות E2E', slug: 'e2e-אודות' } },
  englishOnly: { title: 'E2E English only', slug: 'e2e-english-only' },
}

let createdIds: number[] = []
let previousHome: number | null = null

export async function seedPages(): Promise<void> {
  const payload = await getPayload({ config })
  await cleanupPages()

  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  previousHome = typeof settings.homePage === 'object' ? (settings.homePage?.id ?? null) : (settings.homePage ?? null)

  const home = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { title: e2ePages.home.en, slug: 'e2e-home', _status: 'published' },
  })
  await payload.update({
    collection: 'pages',
    id: home.id,
    locale: 'he',
    data: { title: e2ePages.home.he, slug: 'e2e-bait', _status: 'published' },
  })

  const about = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { ...e2ePages.about.en, _status: 'published' },
  })
  await payload.update({
    collection: 'pages',
    id: about.id,
    locale: 'he',
    data: { ...e2ePages.about.he, _status: 'published' },
  })

  const englishOnly = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { ...e2ePages.englishOnly, _status: 'published' },
  })

  createdIds = [home.id, about.id, englishOnly.id]
  await payload.updateGlobal({ slug: 'site-settings', data: { homePage: home.id } })
}

export async function cleanupPages(): Promise<void> {
  const payload = await getPayload({ config })
  await payload.delete({ collection: 'pages', where: { slug: { like: 'e2e-' } }, locale: 'en' })
  if (createdIds.length) {
    await payload.delete({ collection: 'pages', where: { id: { in: createdIds } } })
    createdIds = []
  }
  if (previousHome !== null) {
    await payload.updateGlobal({ slug: 'site-settings', data: { homePage: previousHome } })
    previousHome = null
  }
}
