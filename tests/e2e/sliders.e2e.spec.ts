import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

const base = 'http://localhost:3000'
const s = Date.now()
const ids = { pages: [] as number[], posts: [] as number[], footers: [] as number[], media: [] as number[] }

test.describe('Sliders, marquee and social icons', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    for (let i = 1; i <= 5; i++) {
      const post = await payload.create({
        collection: 'posts',
        data: { title: `Slide ${s} ${i}`, slug: `slide-${s}-${i}`, _status: 'published', tags: [] },
      })
      ids.posts.push(post.id)
    }
    const page = await payload.create({
      collection: 'pages',
      data: {
        title: `Sliders ${s}`,
        slug: `sliders-${s}`,
        _status: 'published',
        layout: [
          {
            blockType: 'listing',
            heading: 'Arrows and dots',
            collection: 'posts',
            layout: 'slider',
            paging: 'none',
            perPage: 5,
            defaultSort: 'az',
            slider: { perView: '2', arrows: true, dots: true, autoplay: false, fullWidth: false },
          },
          {
            blockType: 'listing',
            heading: 'No controls',
            collection: 'posts',
            layout: 'slider',
            paging: 'none',
            perPage: 5,
            slider: { perView: '1', arrows: false, dots: false, autoplay: true, interval: 3, fullWidth: true },
            cardStyle: 'feature',
          },
          { blockType: 'logos', heading: 'Logos', display: 'marquee', logos: [{ name: 'Acme' }, { name: 'Globex' }] },
        ],
      },
    })
    ids.pages.push(page.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'pages', where: { id: { in: ids.pages } } })
    await payload.delete({ collection: 'posts', where: { id: { in: ids.posts } } })
  })

  test('shows arrows and one dot per start position, and moves with them', async ({ page }) => {
    await page.goto(`${base}/sliders-${s}`)
    const slider = page.getByRole('region', { name: 'Arrows and dots' })
    // 5 slides, 2 per view on desktop = 4 start positions
    await expect(slider.getByRole('button', { name: /^Slide \d$/ })).toHaveCount(4)
    await expect(slider.getByRole('button', { name: 'Slide 1' })).toHaveAttribute('aria-current', 'true')
    await slider.getByRole('button', { name: 'Next' }).click()
    await expect(slider.getByRole('button', { name: 'Slide 2' })).toHaveAttribute('aria-current', 'true')
    await slider.getByRole('button', { name: 'Previous' }).click()
    await slider.getByRole('button', { name: 'Previous' }).click()
    await expect(slider.getByRole('button', { name: 'Slide 4' })).toHaveAttribute('aria-current', 'true')
  })

  test('hides controls when switched off, and goes full width', async ({ page }) => {
    await page.goto(`${base}/sliders-${s}`)
    const slider = page.getByRole('region', { name: 'No controls' })
    await expect(slider.getByRole('button')).toHaveCount(0)
    await expect(slider).toHaveClass(/slider--full/)
    const width = await slider.evaluate((el) => el.getBoundingClientRect().width)
    expect(width).toBeGreaterThanOrEqual(page.viewportSize()!.width - 20)
  })

  test('renders the logo marquee with a hidden duplicate for the loop', async ({ page }) => {
    await page.goto(`${base}/sliders-${s}`)
    await expect(page.locator('.marquee__group')).toHaveCount(2)
    await expect(page.locator('.marquee__group[aria-hidden="true"]')).toHaveCount(1)
  })

  test('shows social links as labelled icons in the footer', async ({ page }) => {
    await page.goto(`${base}/`)
    const footer = page.getByRole('contentinfo')
    await expect(footer.getByRole('link', { name: 'LinkedIn' }).locator('svg')).toBeVisible()
  })
})
