import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

const base = 'http://localhost:3000'
const s = Date.now()
const created: { posts: number[]; people: number[]; categories: number[] } = {
  posts: [],
  people: [],
  categories: [],
}

test.describe('CPT items', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const person = await payload.create({
      collection: 'people',
      data: { title: `E2E Author ${s}`, slug: `e2e-author-${s}`, jobTitle: 'Editor', _status: 'published' },
    })
    const category = await payload.create({ collection: 'categories', data: { title: `E2E News ${s}`, slug: `e2e-news-${s}` } })
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: `E2E Post ${s}`,
        slug: `e2e-post-${s}`,
        excerpt: 'A short summary.',
        author: person.id,
        categories: [category.id],
        _status: 'published',
      },
    })
    created.people.push(person.id)
    created.categories.push(category.id)
    created.posts.push(post.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'posts', where: { id: { in: created.posts } } })
    await payload.delete({ collection: 'people', where: { id: { in: created.people } } })
    await payload.delete({ collection: 'categories', where: { id: { in: created.categories } } })
  })

  test('shows a blog post with its category and author link', async ({ page }) => {
    await page.goto(`${base}/blog/e2e-post-${s}`)
    await expect(page.locator('h1')).toHaveText(`E2E Post ${s}`)
    await expect(page.getByText(`E2E News ${s}`)).toBeVisible()
    await page.getByRole('link', { name: `E2E Author ${s}` }).click()
    await expect(page).toHaveURL(`${base}/people/e2e-author-${s}`)
    await expect(page.locator('h1')).toHaveText(`E2E Author ${s}`)
  })

  test('returns 404 for the post in Hebrew, where it is not published', async ({ page }) => {
    const response = await page.goto(`${base}/he/blog/e2e-post-${s}`)
    expect(response?.status()).toBe(404)
  })
})
