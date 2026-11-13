import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { ItemView } from '@/components/items/ItemView'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath, normalizePath } from '@/i18n/paths'
import { getCptBases, getRouteAlternates, resolveRoute } from '@/lib/queries/content'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, route } = await resolve(params)
  const siteName = await getSiteName(locale)
  return { title: siteName ? `${route.doc.title} | ${siteName}` : route.doc.title }
}

export default async function PageRoute({ params }: Props) {
  const { locale, route } = await resolve(params)
  const [alternates, siteName, bases] = await Promise.all([
    getRouteAlternates(route),
    getSiteName(locale),
    getCptBases(locale),
  ])

  return (
    <>
      <header className="site-bar">
        <div className="container">
          <a className="site-name" href={localizePath(locale, '/')}>
            {siteName}
          </a>
          <LanguageSwitcher current={locale} hrefs={alternates} />
        </div>
      </header>
      <main className="page-main container">
        {route.kind === 'item' ? (
          <ItemView collection={route.collection} doc={route.doc} locale={locale} bases={bases} />
        ) : (
          <h1>{route.doc.title}</h1>
        )}
      </main>
    </>
  )
}
