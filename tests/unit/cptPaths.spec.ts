// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { defaultCptBases } from '@/content/types'
import { cptItemPath, matchCptPath, matchTermArchivePath, termArchivePath } from '@/lib/routing/cptPaths'

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

describe('matchTermArchivePath', () => {
  it('matches base + taxonomy key + term slug', () => {
    expect(matchTermArchivePath('/blog/category/news', defaultCptBases)).toEqual({
      collection: 'posts',
      taxonomy: { field: 'categories', taxonomy: 'categories', key: 'category', label: 'Category' },
      slug: 'news',
    })
    expect(matchTermArchivePath('/resources/industry/retail', defaultCptBases)?.taxonomy.field).toBe('industries')
  })

  it('rejects unknown taxonomy keys and other shapes', () => {
    expect(matchTermArchivePath('/blog/industry/retail', defaultCptBases)).toBeNull()
    expect(matchTermArchivePath('/blog/news', defaultCptBases)).toBeNull()
    expect(matchTermArchivePath('/about/team/x', defaultCptBases)).toBeNull()
  })

  it('builds the archive path back', () => {
    expect(termArchivePath('posts', 'category', 'news', heBases)).toBe('/בלוג/category/news')
  })
})
