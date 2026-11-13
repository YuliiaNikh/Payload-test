// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { slugify } from '@/utilities/slugify'

describe('slugify', () => {
  it('lowercases and dashes Latin text', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
    expect(slugify('  About   Us  ')).toBe('about-us')
  })

  it('keeps Hebrew letters', () => {
    expect(slugify('אודות הצוות')).toBe('אודות-הצוות')
  })

  it('drops Hebrew vowel marks and quote marks', () => {
    expect(slugify('שָׁלוֹם')).toBe('שלום')
    expect(slugify('צה״ל')).toBe('צהל')
    expect(slugify("Don't stop")).toBe('dont-stop')
  })

  it('keeps digits and trims stray dashes', () => {
    expect(slugify('--Top 10 tips--')).toBe('top-10-tips')
  })

  it('returns an empty string when nothing usable is left', () => {
    expect(slugify('!!!')).toBe('')
  })
})
