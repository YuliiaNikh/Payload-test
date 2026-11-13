import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'
import type { SiteSetting } from '../../src/payload-types'

const base = 'http://localhost:3000'
const s = Date.now()
const ids = { pages: [] as number[], posts: [] as number[], headers: [] as number[], footers: [] as number[] }
let previous: Pick<SiteSetting, 'defaultHeader' | 'defaultFooter'>

test.describe('Headers, mega menu and footers', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
    previous = { defaultHeader: settings.defaultHeader, defaultFooter: settings.defaultFooter }

    const about = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Nav about ${s}`, slug: `nav-about-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'pages',
      id: about.id,
      locale: 'he',
      data: { title: `אודות ניווט ${s}`, slug: `nav-odot-${s}`, _status: 'published' },
    })
    const bare = await payload.create({
      collection: 'pages',
      data: {
        title: `Landing no header ${s}`,
        slug: `nav-bare-${s}`,
        _status: 'published',
        appearance: { header: 'none', footer: 'none' },
      },
    })
    const post = await payload.create({
      collection: 'posts',
      data: { title: `Menu latest ${s}`, slug: `menu-latest-${s}`, _status: 'published' },
    })
    ids.pages.push(about.id, bare.id)
    ids.posts.push(post.id)

    const ref = { type: 'reference' as const, reference: { relationTo: 'pages' as const, value: about.id } }
    const header = await payload.create({
      collection: 'headers',
      locale: 'en',
      data: {
        title: `E2E header ${s}`,
        _status: 'published',
        cta: { type: 'custom', url: '#demo', label: 'Book a demo', appearance: 'primary' },
        menu: [
          { label: 'About', type: 'link', link: { ...ref, label: 'About' } },
          { label: 'Company', type: 'dropdown', links: [{ link: { ...ref, label: 'Our story' } }] },
          {
            label: 'Solutions',
            type: 'mega',
            mega: {
              columns: [
                {
                  heading: 'By industry',
                  links: [{ link: { ...ref, label: 'Retail' }, description: 'Stores and kiosks', icon: 'chart' }],
                },
              ],
              auto: { enabled: true, heading: 'Latest news', collection: 'posts', count: 3 },
              promo: { enabled: true, title: 'New report', text: 'Read the 2026 outlook.', link: { ...ref, label: 'Read it' } },
              bottomLink: { ...ref, label: 'All solutions' },
            },
          },
        ],
      },
    })
    await payload.update({
      collection: 'headers',
      id: header.id,
      locale: 'he',
      data: { _status: 'published', menu: [{ label: 'אודות', type: 'link', link: { ...ref, label: 'אודות' } }] },
    })
    const footer = await payload.create({
      collection: 'footers',
      locale: 'en',
      data: {
        title: `E2E footer ${s}`,
        _status: 'published',
        text: 'Footer about text.',
        legal: `Legal line ${s}`,
        columns: [{ heading: 'Company', links: [{ link: { ...ref, label: 'About us' } }] }],
      },
    })
    ids.headers.push(header.id)
    ids.footers.push(footer.id)
    await payload.updateGlobal({ slug: 'site-settings', data: { defaultHeader: header.id, defaultFooter: footer.id } })
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.updateGlobal({ slug: 'site-settings', data: previous })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
    await payload.delete({ collection: 'posts', where: { id: { in: ids.posts } } })
    await payload.delete({ collection: 'headers', where: { id: { in: ids.headers } } })
    await payload.delete({ collection: 'footers', where: { id: { in: ids.footers } } })
  })

  test('opens the mega menu with columns, latest items, promo and bottom link', async ({ page }) => {
    await page.goto(`${base}/nav-about-${s}`)
    const nav = page.getByRole('navigation', { name: 'Main' })
    await expect(nav.getByRole('link', { name: 'About' })).toHaveAttribute('href', `/nav-about-${s}`)
    await nav.getByText('Solutions', { exact: true }).click()
    await expect(nav.getByText('Stores and kiosks')).toBeVisible()
    await expect(nav.getByRole('link', { name: `Menu latest ${s}` })).toBeVisible()
    await expect(nav.getByText('New report')).toBeVisible()
    await expect(nav.getByRole('link', { name: 'All solutions' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(nav.getByText('Stores and kiosks')).toBeHidden()
  })

  test('opens one dropdown at a time', async ({ page }) => {
    await page.goto(`${base}/nav-about-${s}`)
    const nav = page.getByRole('navigation', { name: 'Main' })
    await nav.getByText('Company', { exact: true }).click()
    await expect(nav.getByRole('link', { name: 'Our story' })).toBeVisible()
    await nav.getByText('Solutions', { exact: true }).click()
    await expect(nav.getByRole('link', { name: 'Our story' })).toBeHidden()
  })

  test('shows the Hebrew menu, which is different', async ({ page }) => {
    await page.goto(`${base}/he/nav-odot-${s}`)
    const nav = page.getByRole('navigation', { name: 'ראשי' })
    await expect(nav.getByRole('link', { name: 'אודות' })).toHaveAttribute('href', `/he/nav-odot-${s}`)
    await expect(nav.getByText('Solutions', { exact: true })).toHaveCount(0)
  })

  test('renders the footer, and hides header and footer when the page says none', async ({ page }) => {
    await page.goto(`${base}/nav-about-${s}`)
    await expect(page.getByRole('contentinfo')).toContainText(`Legal line ${s}`)
    await page.goto(`${base}/nav-bare-${s}`)
    await expect(page.getByRole('banner')).toHaveCount(0)
    await expect(page.getByRole('contentinfo')).toHaveCount(0)
  })

  test('collapses the menu behind a button on phones', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto(`${base}/nav-about-${s}`)
    const nav = page.getByRole('navigation', { name: 'Main' })
    await expect(nav).toBeHidden()
    await page.getByRole('button', { name: 'Menu' }).click()
    await expect(nav).toBeVisible()
  })
})
