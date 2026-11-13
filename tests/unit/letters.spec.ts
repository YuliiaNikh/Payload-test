// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { alphabetFor, firstLetter } from '@/utilities/letters'

describe('firstLetter', () => {
  it('uppercases Latin letters', () => {
    expect(firstLetter('api gateway')).toBe('A')
    expect(firstLetter('  Élan')).toBe('E')
  })

  it('keeps Hebrew letters and folds final forms', () => {
    expect(firstLetter('שלום')).toBe('ש')
    expect(firstLetter('ךלום')).toBe('כ')
  })

  it('groups digits and symbols under #', () => {
    expect(firstLetter('3D printing')).toBe('#')
    expect(firstLetter('"Quoted"')).toBe('#')
  })

  it('returns null for empty titles', () => {
    expect(firstLetter('')).toBeNull()
    expect(firstLetter(undefined)).toBeNull()
  })
})

describe('alphabetFor', () => {
  it('starts with the language alphabet and appends other letters found', () => {
    const he = alphabetFor('he', ['א', 'B', '#'])
    expect(he.slice(0, 3)).toEqual(['א', 'ב', 'ג'])
    expect(he.slice(-2)).toEqual(['#', 'B'])
    expect(alphabetFor('en', ['A'])).toHaveLength(26)
  })
})
