import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'
import { richText as text } from '../../src/utilities/richText'

const base = 'http://localhost:3000'
const s = Date.now()
const created = { pages: [] as number[], sections: [] as number[] }

test.describe('Block pages', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const target = await payload.create({
      collection: 'pages',
      data: { title: `Target ${s}`, slug: `target-${s}`, _status: 'published' },
    })
    const section = await payload.create({
      collection: 'reusable-sections',
      data: {
        title: `Shared CTA ${s}`,
        layout: [{ blockType: 'cta', heading: `Shared CTA ${s}` }],
        _status: 'published',
      },
    })
    const page = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: {
        title: `Blocks ${s}`,
        slug: `blocks-${s}`,
        _status: 'published',
        layout: [
          { blockType: 'hero', heading: `Hero ${s}`, variant: 'centered' },
          {
            blockType: 'cards',
            heading: 'Cards',
            items: [
              {
                title: 'Linked card',
                link: { type: 'reference', reference: { relationTo: 'pages', value: target.id }, label: 'Open' },
              },
            ],
          },
          {
            blockType: 'tabs',
            tabs: [
              { label: 'First tab', content: text('First panel') },
              { label: 'Second tab', content: text('Second panel') },
            ],
          },
          { blockType: 'faq', items: [{ question: 'Question one?', answer: text('Answer one') }] },
          { blockType: 'reusableSection', section: section.id },
        ],
      },
    })
    // Hebrew gets a different, shorter layout
    await payload.update({
      collection: 'pages',
      id: page.id,
      locale: 'he',
      data: {
        title: `בלוקים ${s}`,
        slug: `blocks-he-${s}`,
        _status: 'published',
        layout: [{ blockType: 'hero', heading: `גיבור ${s}` }],
      },
    })
    created.pages.push(page.id, target.id)
    created.sections.push(section.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'pages', where: { id: { in: created.pages } } })
    await payload.delete({ collection: 'reusable-sections', where: { id: { in: created.sections } } })
  })

  test('renders the block layout with a working internal link', async ({ page }) => {
    await page.goto(`${base}/blocks-${s}`)
    await expect(page.locator('h1')).toHaveText(`Hero ${s}`)
    await expect(page.getByRole('heading', { name: `Shared CTA ${s}` })).toBeVisible()
    await page.getByRole('link', { name: /Linked card/ }).click()
    await expect(page).toHaveURL(`${base}/target-${s}`)
  })

  test('switches tabs and opens FAQ answers', async ({ page }) => {
    await page.goto(`${base}/blocks-${s}`)
    await expect(page.getByText('First panel')).toBeVisible()
    await page.getByRole('tab', { name: 'Second tab' }).click()
    await expect(page.getByText('Second panel')).toBeVisible()
    await expect(page.getByText('First panel')).toBeHidden()
    await page.getByText('Question one?').click()
    await expect(page.getByText('Answer one')).toBeVisible()
  })

  test('shows the Hebrew layout, which has different sections', async ({ page }) => {
    await page.goto(`${base}/he/blocks-he-${s}`)
    await expect(page.locator('h1')).toHaveText(`גיבור ${s}`)
    await expect(page.getByRole('tab')).toHaveCount(0)
  })
})
