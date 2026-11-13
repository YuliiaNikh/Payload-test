import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'
import { createPreviewToken } from '../../src/lib/preview/token'
import { login } from '../helpers/login'
import { cleanupTestUser, seedTestUser, testUser } from '../helpers/seedUser'

const base = 'http://localhost:3000'
const s = Date.now()
let pageId: number

test.describe('Draft previews', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    await seedTestUser()
    const page = await payload.create({
      collection: 'pages',
      draft: true,
      data: { title: `Secret draft ${s}`, slug: `secret-${s}`, _status: 'draft' },
    })
    pageId = page.id
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'pages', id: pageId })
    await cleanupTestUser()
  })

  test('a share link shows the draft to someone without a login, until they exit', async ({ page }) => {
    const response = await page.goto(`${base}/secret-${s}`)
    expect(response?.status()).toBe(404)

    const token = createPreviewToken({ collection: 'pages', id: pageId, locale: 'en' })
    await page.goto(`${base}/next/preview?token=${token}`)
    await expect(page).toHaveURL(`${base}/secret-${s}`)
    await expect(page.locator('h1')).toHaveText(`Secret draft ${s}`)
    await expect(page.getByRole('status').filter({ hasText: 'Draft preview' })).toBeVisible()

    await page.getByRole('link', { name: 'Exit preview' }).click()
    await expect(page.locator('h1')).toHaveText('Page not found')
  })

  test('rejects a forged or missing token', async ({ request }) => {
    const response = await request.get(`${base}/next/preview?token=abc.def`, { maxRedirects: 0 })
    expect(response.status()).toBe(401)
  })

  test('editors create a share link from the admin sidebar', async ({ page }) => {
    await login({ page, user: testUser })
    await page.goto(`${base}/admin/collections/pages/${pageId}`)
    await page.getByRole('button', { name: /Create preview link/ }).click()
    await expect(page.getByLabel('Preview link')).toHaveValue(/\/next\/preview\?token=/)
  })
})
