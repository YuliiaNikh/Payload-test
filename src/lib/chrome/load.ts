import config from '@payload-config'
import { getPayload } from 'payload'

import type { Locale } from '@/i18n/config'
import type { Footer, Header } from '@/payload-types'

import { pickChrome, type Appearance } from './pick'

type Loaded<T> = T | 'none' | 'fallback'

async function loadPublished<T extends 'headers' | 'footers'>(collection: T, id: number, locale: Locale) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection,
    locale,
    draft: false,
    depth: 2,
    limit: 1,
    where: { and: [{ id: { equals: id } }, { _status: { equals: 'published' } }] },
  })
  return docs[0] ?? null
}

// Header and footer for a page: its own choice, the site default, none, or the plain fallback bar
export async function loadChrome(
  appearance: Appearance,
  locale: Locale,
): Promise<{ header: Loaded<Header>; footer: Loaded<Footer> }> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  const choice = pickChrome(appearance, { header: settings.defaultHeader, footer: settings.defaultFooter })

  const header = typeof choice.header === 'number' ? ((await loadPublished('headers', choice.header, locale)) ?? 'fallback') : choice.header
  const footer = typeof choice.footer === 'number' ? ((await loadPublished('footers', choice.footer, locale)) ?? 'fallback') : choice.footer
  return { header: header as Loaded<Header>, footer: footer as Loaded<Footer> }
}
