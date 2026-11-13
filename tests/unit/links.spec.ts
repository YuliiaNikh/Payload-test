// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { defaultCptBases } from '@/content/types'
import { linkHref, type LinkValue } from '@/lib/links'

const ctx = { locale: 'en' as const, bases: defaultCptBases, homeId: 1 }
const he = { ...ctx, locale: 'he' as const, bases: { ...defaultCptBases, posts: 'בלוג' } }

const page = (id: number, url: string) => ({ id, slug: url.split('/').pop(), breadcrumbs: [{ url }] })

describe('linkHref', () => {
  it('passes custom URLs through', () => {
    const link: LinkValue = { type: 'custom', url: 'https://example.com', label: 'x' }
    expect(linkHref(link, ctx)).toBe('https://example.com')
  })

  it('resolves page references to their localized path', () => {
    const link: LinkValue = { type: 'reference', reference: { relationTo: 'pages', value: page(5, '/about/team') } }
    expect(linkHref(link, ctx)).toBe('/about/team')
    expect(linkHref(link, he)).toBe('/he/about/team')
  })

  it('sends the home page to the site root', () => {
    const link: LinkValue = { type: 'reference', reference: { relationTo: 'pages', value: page(1, '/home') } }
    expect(linkHref(link, ctx)).toBe('/')
    expect(linkHref(link, he)).toBe('/he')
  })

  it('resolves CPT references with the language base', () => {
    const link: LinkValue = {
      type: 'reference',
      reference: { relationTo: 'posts', value: { id: 9, slug: 'hello' } },
    }
    expect(linkHref(link, ctx)).toBe('/blog/hello')
    expect(linkHref(link, he)).toBe('/he/בלוג/hello')
  })

  it('returns null when the reference is missing or not populated', () => {
    expect(linkHref({ type: 'reference', reference: null }, ctx)).toBeNull()
    expect(linkHref({ type: 'reference', reference: { relationTo: 'pages', value: 5 } }, ctx)).toBeNull()
    expect(linkHref({ type: 'custom', url: '' }, ctx)).toBeNull()
  })

  it('hides links to targets that are not published in this language', () => {
    const link: LinkValue = {
      type: 'reference',
      reference: { relationTo: 'posts', value: { id: 9, slug: 'hello', _status: 'draft' } },
    }
    expect(linkHref(link, ctx)).toBeNull()
  })
})
