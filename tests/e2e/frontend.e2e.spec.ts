import { expect, test } from '@playwright/test'

import { cleanupPages, e2ePages, seedPages } from '../helpers/seedPages'

const base = 'http://localhost:3000'

test.describe('Locale routing', () => {
  test.beforeAll(async () => {
    await seedPages()
  })

  test.afterAll(async () => {
    await cleanupPages()
  })

  test('serves English at / without a prefix, left to right', async ({ page }) => {
    await page.goto(`${base}/`)
    await expect(page.locator('h1')).toHaveText(e2ePages.home.en)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr')
  })

  test('redirects /en/... to the unprefixed URL', async ({ page }) => {
    await page.goto(`${base}/en/${e2ePages.about.en.slug}`)
    await expect(page).toHaveURL(`${base}/${e2ePages.about.en.slug}`)
    await expect(page.locator('h1')).toHaveText(e2ePages.about.en.title)
  })

  test('serves Hebrew under /he with a Hebrew slug, right to left', async ({ page }) => {
    await page.goto(`${base}/he/${encodeURIComponent(e2ePages.about.he.slug)}`)
    await expect(page.locator('h1')).toHaveText(e2ePages.about.he.title)
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  })

  test('switches language to the same page', async ({ page }) => {
    await page.goto(`${base}/${e2ePages.about.en.slug}`)
    await page.getByRole('navigation', { name: 'Language' }).locator('summary').click()
    await page.getByRole('link', { name: 'עברית' }).click()
    await expect(page.locator('h1')).toHaveText(e2ePages.about.he.title)
  })

  test('switches to the Hebrew home page when the page has no Hebrew version', async ({ page }) => {
    await page.goto(`${base}/${e2ePages.englishOnly.slug}`)
    await page.getByRole('navigation', { name: 'Language' }).locator('summary').click()
    await page.getByRole('link', { name: 'עברית' }).click()
    await expect(page).toHaveURL(`${base}/he`)
    await expect(page.locator('h1')).toHaveText(e2ePages.home.he)
  })

  test('returns 404 for a page that is not published in Hebrew', async ({ page }) => {
    const response = await page.goto(`${base}/he/${e2ePages.englishOnly.slug}`)
    expect(response?.status()).toBe(404)
  })
})
