// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { titleFromPattern } from '@/lib/seo/metadata'

describe('titleFromPattern', () => {
  it('fills %title% and %site%', () => {
    expect(titleFromPattern('%title% | %site%', 'About', 'Acme')).toBe('About | Acme')
    expect(titleFromPattern('%site% — %title%', 'אודות', 'אקמה')).toBe('אקמה — אודות')
  })

  it('falls back to the default pattern and to the bare title', () => {
    expect(titleFromPattern(null, 'About', 'Acme')).toBe('About | Acme')
    expect(titleFromPattern('%title% | %site%', 'About', '')).toBe('About')
  })
})
