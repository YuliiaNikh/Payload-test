// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { isLocale, localeDir } from '@/i18n/config'
import { localizePath, normalizePath, splitLocale } from '@/i18n/paths'

describe('locale config', () => {
  it('recognises supported locales only', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('he')).toBe(true)
    expect(isLocale('fr')).toBe(true)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })

  it('gives Hebrew right-to-left direction', () => {
    expect(localeDir('he')).toBe('rtl')
    expect(localeDir('en')).toBe('ltr')
  })
})

describe('splitLocale', () => {
  it('treats unprefixed paths as English', () => {
    expect(splitLocale('/about')).toEqual({ locale: 'en', path: '/about', prefixed: false })
    expect(splitLocale('/')).toEqual({ locale: 'en', path: '/', prefixed: false })
  })

  it('extracts a locale prefix', () => {
    expect(splitLocale('/he/about/team')).toEqual({ locale: 'he', path: '/about/team', prefixed: true })
    expect(splitLocale('/he')).toEqual({ locale: 'he', path: '/', prefixed: true })
    expect(splitLocale('/he/')).toEqual({ locale: 'he', path: '/', prefixed: true })
    expect(splitLocale('/en/about')).toEqual({ locale: 'en', path: '/about', prefixed: true })
  })

  it('does not treat words that start with a locale code as a prefix', () => {
    expect(splitLocale('/hebrew')).toEqual({ locale: 'en', path: '/hebrew', prefixed: false })
  })
})

describe('localizePath', () => {
  it('leaves English unprefixed', () => {
    expect(localizePath('en', '/about')).toBe('/about')
    expect(localizePath('en', '/')).toBe('/')
  })

  it('prefixes other locales', () => {
    expect(localizePath('he', '/about')).toBe('/he/about')
    expect(localizePath('he', '/')).toBe('/he')
  })
})

describe('normalizePath', () => {
  it('joins catch-all segments', () => {
    expect(normalizePath(['about', 'team'])).toBe('/about/team')
    expect(normalizePath(undefined)).toBe('/')
    expect(normalizePath([])).toBe('/')
  })

  it('decodes percent-encoded Hebrew segments', () => {
    expect(normalizePath(['%D7%90%D7%95%D7%93%D7%95%D7%AA'])).toBe('/אודות')
    expect(normalizePath(['אודות'])).toBe('/אודות')
  })

  it('keeps malformed encodings as they are', () => {
    expect(normalizePath(['100%'])).toBe('/100%')
  })
})
