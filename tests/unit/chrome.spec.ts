// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { pickChrome } from '@/lib/chrome/pick'

const defaults = { header: 1, footer: 2 }

describe('pickChrome', () => {
  it('uses the site defaults when the page says default or nothing', () => {
    expect(pickChrome(undefined, defaults)).toEqual({ header: 1, footer: 2 })
    expect(pickChrome({ header: 'default', footer: 'default' }, defaults)).toEqual({ header: 1, footer: 2 })
  })

  it('uses the chosen design', () => {
    expect(pickChrome({ header: 'custom', headerRef: 7, footer: 'custom', footerRef: { id: 8 } }, defaults)).toEqual({
      header: 7,
      footer: 8,
    })
  })

  it('falls back to the default when "choose another" has no choice', () => {
    expect(pickChrome({ header: 'custom', headerRef: null }, defaults).header).toBe(1)
  })

  it('hides header or footer with none', () => {
    expect(pickChrome({ header: 'none', footer: 'none' }, defaults)).toEqual({ header: 'none', footer: 'none' })
  })

  it('returns "fallback" when nothing is configured', () => {
    expect(pickChrome(undefined, { header: null, footer: null })).toEqual({ header: 'fallback', footer: 'fallback' })
  })
})
