import type { Crumb } from '@/components/Breadcrumbs'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { ui } from '@/i18n/ui'
import type { Route } from '@/lib/queries/content'
import { findPublishedPageByPath } from '@/lib/queries/pages'
import type { CptBases } from '@/lib/routing/cptPaths'
import { absoluteUrl } from '@/lib/siteUrl'
import type { Event, Media, Person, Post } from '@/payload-types'

// Home › parents › page, or Home › archive page › item
export async function buildCrumbs(route: Route, locale: Locale, bases: CptBases, homeId: number | null, pathname: string): Promise<Crumb[]> {
  const home = { label: ui(locale).home, href: localizePath(locale, '/') }
  if (route.kind === 'page') {
    if (route.doc.id === homeId) return []
    const trail = (route.doc.breadcrumbs ?? []).map((b) => ({ label: b.label ?? '', href: localizePath(locale, b.url ?? '/') }))
    return route.preset ? [home, ...trail, { label: route.preset.title, href: pathname }] : [home, ...trail]
  }
  const archive = await findPublishedPageByPath(`/${bases[route.collection]}`, locale)
  const archiveCrumb = archive ? [{ label: archive.title, href: localizePath(locale, `/${bases[route.collection]}`) }] : []
  return [home, ...archiveCrumb, { label: route.doc.title, href: pathname }]
}

const imageOf = (value: unknown) =>
  typeof value === 'object' && value !== null && typeof (value as Media).url === 'string' ? absoluteUrl((value as Media).url!) : undefined

export function buildJsonLd(route: Route, crumbs: Crumb[], siteName: string, isHome: boolean): Record<string, unknown>[] {
  const graph: Record<string, unknown>[] = []
  if (isHome) graph.push({ '@context': 'https://schema.org', '@type': 'Organization', name: siteName, url: absoluteUrl('/') })
  if (crumbs.length > 1) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, name: crumb.label, item: absoluteUrl(crumb.href) })),
    })
  }
  if (route.kind === 'item' && route.collection === 'posts') {
    const post = route.doc as Post
    const author = typeof post.author === 'object' && post.author ? (post.author as Person).title : undefined
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      datePublished: post.publishedDate ?? post.createdAt,
      dateModified: post.updatedAt,
      image: imageOf(post.featuredImage),
      author: author ? { '@type': 'Person', name: author } : undefined,
      publisher: { '@type': 'Organization', name: siteName },
    })
  }
  if (route.kind === 'item' && route.collection === 'events') {
    const event = route.doc as Event
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.title,
      startDate: event.startDate,
      endDate: event.endDate ?? undefined,
      description: event.excerpt ?? undefined,
      image: imageOf(event.featuredImage),
      location: event.location ? { '@type': 'Place', name: event.location } : undefined,
      eventStatus: 'https://schema.org/EventScheduled',
    })
  }
  return graph
}
