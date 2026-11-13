import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

const base = 'http://localhost:3000'
const s = Date.now()
const ids = { pages: [] as number[], redirects: [] as number[] }
let previousPortal: string | null | undefined

test.describe('SEO, redirects and HubSpot', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
    previousPortal = settings.hubspot?.portalId
    await payload.updateGlobal({ slug: 'site-settings', data: { hubspot: { portalId: '123456', region: 'eu1', tracking: false } } })

    const page = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: {
        title: `SEO page ${s}`,
        slug: `seo-${s}`,
        _status: 'published',
        meta: { title: `Custom SEO title ${s}`, description: `Custom description ${s}` },
        layout: [{ blockType: 'hubspotForm', heading: 'Talk to us', formId: 'abc-def', display: 'inline' }],
      },
    })
    await payload.update({
      collection: 'pages',
      id: page.id,
      locale: 'he',
      data: { title: `עמוד ${s}`, slug: `seo-he-${s}`, _status: 'published' },
    })
    const hidden = await payload.create({
      collection: 'pages',
      data: { title: `Hidden ${s}`, slug: `hidden-${s}`, _status: 'published', meta: { noindex: true } },
    })
    // Rename a published page: the old URL must keep working
    const renamed = await payload.create({
      collection: 'pages',
      data: { title: `Renamed ${s}`, slug: `before-${s}`, _status: 'published' },
    })
    await payload.update({ collection: 'pages', id: renamed.id, data: { slug: `after-${s}`, _status: 'published' } })
    const manual = await payload.create({
      collection: 'redirects',
      data: { from: `/campaign-${s}`, to: { type: 'custom', url: `/seo-${s}` }, type: '302' },
    })
    ids.pages.push(page.id, hidden.id, renamed.id)
    ids.redirects.push(manual.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.updateGlobal({ slug: 'site-settings', data: { hubspot: { portalId: previousPortal ?? null } } })
    await payload.delete({ collection: 'redirects', where: { from: { like: String(s) } } })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
  })

  test('writes SEO title, description, canonical and hreflang', async ({ page }) => {
    await page.goto(`${base}/seo-${s}`)
    await expect(page).toHaveTitle(`Custom SEO title ${s}`)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', `Custom description ${s}`)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `http://localhost:3000/seo-${s}`)
    await expect(page.locator('link[rel="alternate"][hreflang="he"]')).toHaveAttribute('href', `http://localhost:3000/he/seo-he-${s}`)
  })

  test('marks noindex pages and leaves them out of the sitemap', async ({ page, request }) => {
    await page.goto(`${base}/hidden-${s}`)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
    const sitemap = await (await request.get(`${base}/sitemap.xml`)).text()
    expect(sitemap).toContain(`/seo-${s}</loc>`)
    expect(sitemap).toContain(`hreflang="he"`)
    expect(sitemap).not.toContain(`/hidden-${s}<`)
  })

  test('redirects a renamed page and a manual redirect', async ({ page, request }) => {
    const old = await request.get(`${base}/before-${s}`, { maxRedirects: 0 })
    expect(old.status()).toBe(308)
    expect(old.headers().location).toBe(`/after-${s}`)
    await page.goto(`${base}/campaign-${s}`)
    await expect(page).toHaveURL(`${base}/seo-${s}`)
  })

  test('renders the HubSpot form container with the portal and form IDs', async ({ page }) => {
    await page.route('**/js.hsforms.net/**', (route) => route.abort())
    await page.goto(`${base}/seo-${s}`)
    const target = page.locator('.hubspot__target')
    await expect(target).toHaveAttribute('data-portal-id', '123456')
    await expect(target).toHaveAttribute('data-form-id', 'abc-def')
  })

  test('serves robots.txt with the sitemap', async ({ request }) => {
    const robots = await (await request.get(`${base}/robots.txt`)).text()
    expect(robots).toContain('Disallow: /admin')
    expect(robots).toContain('/sitemap.xml')
  })
})
