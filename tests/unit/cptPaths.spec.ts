// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { defaultCptBases } from '@/content/types'
import { cptItemPath, matchCptPath } from '@/lib/routing/cptPaths'

const heBases = { ...defaultCptBases, posts: 'בלוג' }

describe('matchCptPath', () => {
  it('matches base + slug', () => {
    expect(matchCptPath('/blog/hello', defaultCptBases)).toEqual({ collection: 'posts', slug: 'hello' })
    expect(matchCptPath('/people/dana', defaultCptBases)).toEqual({ collection: 'people', slug: 'dana' })
  })

  it('uses the bases of the current language', () => {
    expect(matchCptPath('/בלוג/shalom', heBases)).toEqual({ collection: 'posts', slug: 'shalom' })
    expect(matchCptPath('/blog/shalom', heBases)).toBeNull()
  })

  it('ignores the bare base (that is the archive page) and deeper paths', () => {
    expect(matchCptPath('/blog', defaultCptBases)).toBeNull()
    expect(matchCptPath('/blog/a/b', defaultCptBases)).toBeNull()
    expect(matchCptPath('/', defaultCptBases)).toBeNull()
  })
})

describe('cptItemPath', () => {
  it('joins base and slug', () => {
    expect(cptItemPath('posts', 'hello', defaultCptBases)).toBe('/blog/hello')
    expect(cptItemPath('posts', 'shalom', heBases)).toBe('/בלוג/shalom')
  })
})
