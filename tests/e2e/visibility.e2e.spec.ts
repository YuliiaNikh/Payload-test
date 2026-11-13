import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'
import type { CtaBlock } from '../../src/payload-types'

const base = 'http://localhost:3000'
const s = Date.now()
const ids = { pages: [] as number[], events: [] as number[] }
const day = 86_400_000

const register: CtaBlock = {
  blockType: 'cta',
  heading: `Register now ${s}`,
  vis: { match: 'all', rules: [{ type: 'field', field_name: 'startDate', field_operator: 'future' }] },
}

test.describe('Visibility conditions', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const page = await payload.create({
      collection: 'pages',
      data: {
        title: `Visibility ${s}`,
        slug: `visibility-${s}`,
        _status: 'published',
        layout: [
          { blockType: 'cta', heading: `Always ${s}` },
          {
            blockType: 'cta',
            heading: `Campaign only ${s}`,
            vis: { match: 'all', rules: [{ type: 'url', url_param: 'utm_campaign', url_value: 'bf' }] },
          },
          {
            blockType: 'cta',
            heading: `Next month ${s}`,
            vis: { match: 'all', rules: [{ type: 'date', date_from: new Date(Date.now() + 30 * day).toISOString() }] },
          },
          {
            blockType: 'cta',
            heading: `Desktop only ${s}`,
            vis: { match: 'all', rules: [{ type: 'device', device_show: ['desktop'] }] },
          },
        ],
      },
    })
    ids.pages.push(page.id)
    for (const [slug, offset] of [
      [`vis-upcoming-${s}`, 10],
      [`vis-past-${s}`, -10],
    ] as const) {
      const event = await payload.create({
        collection: 'events',
        data: {
          title: slug,
          slug,
          startDate: new Date(Date.now() + offset * day).toISOString(),
          layout: [register],
          _status: 'published',
        },
      })
      ids.events.push(event.id)
    }
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
    await payload.delete({ collection: 'events', where: { id: { in: ids.events } } })
  })

  test('shows a campaign section only with its URL parameter', async ({ page }) => {
    await page.goto(`${base}/visibility-${s}`)
    await expect(page.getByRole('heading', { name: `Always ${s}` })).toBeVisible()
    await expect(page.getByRole('heading', { name: `Campaign only ${s}` })).toHaveCount(0)
    await expect(page.getByRole('heading', { name: `Next month ${s}` })).toHaveCount(0)
    await page.goto(`${base}/visibility-${s}?utm_campaign=bf`)
    await expect(page.getByRole('heading', { name: `Campaign only ${s}` })).toBeVisible()
  })

  test('hides desktop-only sections on phones', async ({ page }) => {
    await page.goto(`${base}/visibility-${s}`)
    await expect(page.getByRole('heading', { name: `Desktop only ${s}` })).toBeVisible()
    await page.setViewportSize({ width: 390, height: 800 })
    await expect(page.getByRole('heading', { name: `Desktop only ${s}` })).toBeHidden()
  })

  test('shows "Register" only on events that have not started', async ({ page }) => {
    await page.goto(`${base}/events/vis-upcoming-${s}`)
    await expect(page.getByRole('heading', { name: `Register now ${s}` })).toBeVisible()
    await page.goto(`${base}/events/vis-past-${s}`)
    await expect(page.getByRole('heading', { name: `Register now ${s}` })).toHaveCount(0)
  })
})
