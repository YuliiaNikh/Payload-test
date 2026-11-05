import { test, expect } from '@playwright/test'

import { SITE_NAME } from '../../src/utilities/site'

test.describe('Frontend', () => {
  test('can load homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(new RegExp(SITE_NAME))
    const heading = page.locator('h1').first()
    await expect(heading).toHaveText('Payload Website Template')
  })
})
