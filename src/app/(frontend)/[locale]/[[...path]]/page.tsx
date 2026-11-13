import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound, permanentRedirect, redirect } from 'next/navigation'
import Script from 'next/script'
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
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'
import { loadChrome } from '@/lib/chrome/load'
import { findRedirect } from '@/lib/queries/redirects'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildCrumbs, buildJsonLd } from '@/lib/seo/structured'
import { getHomePageId } from '@/lib/queries/pages'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
  searchParams: Promise<SearchParams>
}

async function resolve(params: Props['params']) {
  const { locale, path } = await params
  if (!isLocale(locale)) notFound()
  const pathname = localizePath(locale, normalizePath(path))
  const route = await resolveRoute(normalizePath(path), locale)
  if (!route) {
    // Old URLs from the redirects manager (and automatic slug-change redirects)
    const target = await findRedirect(pathname)
    if (target) (target.permanent ? permanentRedirect : redirect)(target.href)
    notFound()
  }
  return { locale, route, pathname }
}

async function getSiteSettings(locale: Locale) {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
}

async function getItemDefaults(collection: CptSlug, locale: Locale) {
  const payload = await getPayload({ config })
  const defaults = await payload.findGlobal({ slug: 'cpt-defaults', locale, depth: 2 })
  return defaults[collection]?.after ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, route, pathname } = await resolve(params)
  return buildMetadata(route, locale, pathname)
}

export default async function PageRoute({ params, searchParams }: Props) {
  const { locale, route, pathname } = await resolve(params)
  const [alternates, settings, bases, homeId, chrome] = await Promise.all([
    getRouteAlternates(route),
    getSiteSettings(locale),
    getCptBases(locale),
    getHomePageId(),
    loadChrome(route.doc.appearance, locale),
  ])
  const siteName = settings.siteName ?? ''
  const hubspot = settings.hubspot
  const crumbs = await buildCrumbs(route, locale, bases, homeId, pathname)
  const ctx: BlockContext = {
    locale,
    bases,
    homeId,
    item: route.kind === 'item' ? { collection: route.collection, doc: route.doc } : undefined,
    pathname,
    searchParams: await searchParams,
    preset: route.kind === 'page' ? route.preset : undefined,
  }

  return (
    <>
      {chrome.header !== 'none' && <SiteHeader header={chrome.header} siteName={siteName} alternates={alternates} ctx={ctx} />}
      <JsonLd data={buildJsonLd(route, crumbs, siteName, route.kind === 'page' && route.doc.id === homeId)} />
      <main>
        <Breadcrumbs crumbs={crumbs} label={locale === 'he' ? 'פירורי לחם' : 'Breadcrumb'} />
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
      {hubspot?.tracking && hubspot.portalId && (
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`https://js${hubspot.region === 'eu1' ? '-eu1' : ''}.hs-scripts.com/${hubspot.portalId}.js`}
        />
      )}
    </>
  )
}
