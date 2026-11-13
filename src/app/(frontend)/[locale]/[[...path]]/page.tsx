import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath, normalizePath } from '@/i18n/paths'
import { findPublishedPageByPath, getPageAlternates } from '@/lib/queries/pages'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
}

async function resolve(params: Props['params']) {
  const { locale, path } = await params
  if (!isLocale(locale)) notFound()
  const page = await findPublishedPageByPath(normalizePath(path), locale)
  if (!page) notFound()
  return { locale, page }
}

async function getSiteName(locale: Locale): Promise<string> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return settings.siteName ?? ''
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await resolve(params)
  const siteName = await getSiteName(locale)
  return { title: siteName ? `${page.title} | ${siteName}` : page.title }
}

export default async function PageRoute({ params }: Props) {
  const { locale, page } = await resolve(params)
  const [alternates, siteName] = await Promise.all([getPageAlternates(page.id), getSiteName(locale)])

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
        <h1>{page.title}</h1>
      </main>
    </>
  )
}
