import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import type { BlockContext } from '@/blocks/context'
import type { SearchParams } from '@/blocks/Listing/state'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { ItemView } from '@/components/items/ItemView'
import { SiteFooter } from '@/components/chrome/SiteFooter'
import { SiteHeader } from '@/components/chrome/SiteHeader'
import type { CptSlug } from '@/content/types'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath, normalizePath } from '@/i18n/paths'
import { getCptBases, getRouteAlternates, resolveRoute } from '@/lib/queries/content'
import { loadChrome } from '@/lib/chrome/load'
import { getHomePageId } from '@/lib/queries/pages'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
  searchParams: Promise<SearchParams>
}

async function resolve(params: Props['params']) {
  const { locale, path } = await params
  if (!isLocale(locale)) notFound()
  const route = await resolveRoute(normalizePath(path), locale)
  if (!route) notFound()
  return { locale, route }
}

async function getSiteName(locale: Locale): Promise<string> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return settings.siteName ?? ''
}

async function getItemDefaults(collection: CptSlug, locale: Locale) {
  const payload = await getPayload({ config })
  const defaults = await payload.findGlobal({ slug: 'cpt-defaults', locale, depth: 2 })
  return defaults[collection]?.after ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, route } = await resolve(params)
  const siteName = await getSiteName(locale)
  return { title: siteName ? `${route.doc.title} | ${siteName}` : route.doc.title }
}

export default async function PageRoute({ params, searchParams }: Props) {
  const { locale, route } = await resolve(params)
  const { path } = await params
  const [alternates, siteName, bases, homeId, chrome] = await Promise.all([
    getRouteAlternates(route),
    getSiteName(locale),
    getCptBases(locale),
    getHomePageId(),
    loadChrome(route.doc.appearance, locale),
  ])
  const ctx: BlockContext = {
    locale,
    bases,
    homeId,
    item: route.kind === 'item' ? { collection: route.collection, doc: route.doc } : undefined,
    pathname: localizePath(locale, normalizePath(path)),
    searchParams: await searchParams,
    preset: route.kind === 'page' ? route.preset : undefined,
  }

  return (
    <>
      {chrome.header !== 'none' && <SiteHeader header={chrome.header} siteName={siteName} alternates={alternates} ctx={ctx} />}
      <main>
        {route.kind === 'item' ? (
          <>
            <section className="section section--spacing-md">
              <div className="container">
                <ItemView collection={route.collection} doc={route.doc} locale={locale} bases={bases} />
              </div>
            </section>
            <RenderBlocks blocks={route.doc.layout} ctx={ctx} />
            <RenderBlocks blocks={await getItemDefaults(route.collection, locale)} ctx={ctx} />
          </>
        ) : route.doc.layout?.length ? (
          <RenderBlocks blocks={route.doc.layout} ctx={ctx} />
        ) : (
          <section className="section">
            <div className="container">
              <h1>{route.doc.title}</h1>
            </div>
          </section>
        )}
      </main>
      {chrome.footer !== 'none' && <SiteFooter footer={chrome.footer} siteName={siteName} ctx={ctx} />}
    </>
  )
}
