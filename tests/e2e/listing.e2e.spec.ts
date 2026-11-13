import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'
import type { SiteSetting } from '../../src/payload-types'

const base = 'http://localhost:3000'
const s = Date.now()
const blogBase = `e2eblog${s}`
const ids = { pages: [] as number[], posts: [] as number[], glossary: [] as number[], categories: [] as number[] }
let previousBases: SiteSetting['cptBases']

test.describe('Listing block', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings', locale: 'en', depth: 0 })
    previousBases = settings.cptBases
    await payload.updateGlobal({ slug: 'site-settings', locale: 'en', data: { cptBases: { ...settings.cptBases, posts: blogBase } } })

    const news = await payload.create({ collection: 'categories', data: { title: `News ${s}`, slug: `news-${s}` } })
    const guides = await payload.create({ collection: 'categories', data: { title: `Guides ${s}`, slug: `guides-${s}` } })
    ids.categories.push(news.id, guides.id)
    for (const [title, category] of [
      [`First news ${s}`, news.id],
      [`Second news ${s}`, news.id],
      [`A guide ${s}`, guides.id],
    ] as const) {
      const post = await payload.create({
        collection: 'posts',
        data: { title, slug: title.toLowerCase().replace(/\s+/g, '-'), categories: [category], _status: 'published' },
      })
      ids.posts.push(post.id)
    }
    for (const title of [`Alpha ${s}`, `Beta ${s}`, `Bravo ${s}`]) {
      const term = await payload.create({
        collection: 'glossary',
        data: { title, slug: title.toLowerCase().replace(/\s+/g, '-'), _status: 'published' },
      })
      ids.glossary.push(term.id)
    }

    const page = await payload.create({
      collection: 'pages',
      data: {
        title: `Blog ${s}`,
        slug: blogBase,
        _status: 'published',
        layout: [
          {
            blockType: 'listing',
            heading: 'Posts',
            collection: 'posts',
            fixedTerms: [
              { relationTo: 'categories', value: news.id },
              { relationTo: 'categories', value: guides.id },
            ],
            filters: [{ type: 'taxonomy', taxonomy: 'category', display: 'tabs' }, { type: 'search' }],
            cardStyle: 'standard',
            layout: 'grid3',
            paging: 'numbers',
            perPage: 9,
            defaultSort: 'az',
          },
          {
            blockType: 'listing',
            heading: 'Glossary',
            collection: 'glossary',
            filters: [{ type: 'az' }],
            cardStyle: 'compact',
            layout: 'list',
            paging: 'loadMore',
            perPage: 1,
            defaultSort: 'az',
          },
        ],
      },
    })
    ids.pages.push(page.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.updateGlobal({ slug: 'site-settings', locale: 'en', data: { cptBases: previousBases } })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
    await payload.delete({ collection: 'posts', where: { id: { in: ids.posts } } })
    await payload.delete({ collection: 'glossary', where: { id: { in: ids.glossary } } })
    await payload.delete({ collection: 'categories', where: { id: { in: ids.categories } } })
  })

  const posts = (page: import('@playwright/test').Page) => page.locator('.listing').nth(0)
  const glossary = (page: import('@playwright/test').Page) => page.locator('.listing').nth(1)

  test('filters by a category tab and puts it in the URL', async ({ page }) => {
    await page.goto(`${base}/${blogBase}`)
    await expect(posts(page).getByRole('status')).toHaveText('3 results')
    await posts(page).locator('label', { hasText: `News ${s}` }).click()
    await expect(page).toHaveURL(new RegExp(`category=news-${s}`))
    await expect(posts(page).getByRole('status')).toHaveText('2 results')
    await expect(posts(page).getByRole('heading', { name: `A guide ${s}` })).toHaveCount(0)
  })

  test('searches by keyword', async ({ page }) => {
    await page.goto(`${base}/${blogBase}`)
    await posts(page).getByRole('searchbox').fill('guide')
    await posts(page).getByRole('button', { name: 'Search' }).click()
    await expect(posts(page).getByRole('status')).toHaveText('1 result')
  })

  test('filters the glossary by letter with its own URL prefix, and loads more', async ({ page }) => {
    await page.goto(`${base}/${blogBase}`)
    await expect(glossary(page).locator('label[aria-disabled="true"]', { hasText: /^X$/ })).toHaveCount(1)
    await glossary(page).locator('label', { hasText: /^B$/ }).click()
    await expect(page).toHaveURL(/l2_letter=B/)
    await expect(glossary(page).getByRole('status')).toHaveText('2 results')
    await expect(glossary(page).locator('.compact-card')).toHaveCount(1)
    await glossary(page).getByRole('link', { name: 'Load more' }).click()
    await expect(glossary(page).locator('.compact-card')).toHaveCount(2)
    await expect(page).toHaveURL(/l2_page=2/)
  })

  test('serves a term archive from the archive page', async ({ page }) => {
    await page.goto(`${base}/${blogBase}/category/news-${s}`)
    await expect(posts(page).getByRole('status')).toHaveText('2 results')
    await expect(posts(page).getByRole('heading', { level: 2 })).toContainText(`News ${s}`)
  })
})
