// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { pageCount, stepTo } from '@/components/slider/pages'

describe('slider pages', () => {
  it('counts start positions', () => {
    expect(pageCount(7, 3)).toBe(5)
    expect(pageCount(7, 1)).toBe(7)
    expect(pageCount(2, 3)).toBe(1)
    expect(pageCount(0, 3)).toBe(1)
  })

  it('wraps around both ends', () => {
    expect(stepTo(4, 1, 5)).toBe(0)
    expect(stepTo(0, -1, 5)).toBe(4)
    expect(stepTo(2, 1, 5)).toBe(3)
  })
})
