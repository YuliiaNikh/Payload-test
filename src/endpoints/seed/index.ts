import type { CollectionSlug, File, Payload, PayloadRequest } from 'payload'

import fs from 'fs/promises'
import path from 'path'

import { pardesFooter, pardesHeader, pardesHome } from './pardes-home'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]

// Images exported from the Pardes Figma file; traced into the seed route in next.config.ts
const imageDir = path.resolve(process.cwd(), 'src/endpoints/seed/pardes')

const readImage = async (fileName: string): Promise<File> => {
  const data = await fs.readFile(path.join(imageDir, fileName))
  return { name: fileName, data, mimetype: 'image/jpeg', size: data.byteLength }
}

// Runs inside the app's /next/seed route, so the page and globals revalidate as they're written
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing collections...`)

  // Writes share one transaction (req), so they run one at a time
  for (const collection of collections) {
    await payload.db.deleteMany({ collection, req, where: {} })
    if (payload.collections[collection].config.versions) {
      await payload.db.deleteVersions({ collection, req, where: {} })
    }
  }

  payload.logger.info(`— Seeding media...`)

  const createImage = async (fileName: string, alt: string) =>
    payload.create({ collection: 'media', data: { alt }, file: await readImage(fileName), req })

  const hero = await createImage('hero.jpg', 'Students laughing while studying together at Pardes')
  const cardPrograms = await createImage(
    'card-programs.jpg',
    'A person lying in a field of flowers',
  )
  const cardEvents = await createImage('card-events.jpg', 'Colorful painted coffee mugs on a table')
  const cardLibrary = await createImage('card-library.jpg', 'A small boat on a calm sea at sunset')
  const birds = await createImage('birds.jpg', 'Illustration of birds in flight')
  const tree = await createImage('tree.jpg', 'Illustration of a tree beneath an oval skylight')
  const faculty = []
  for (const n of [1, 2, 3, 4, 5]) {
    faculty.push(await createImage(`faculty-${n}.jpg`, 'Pardes faculty member'))
  }

  payload.logger.info(`— Seeding newsletter form...`)

  const newsletterForm = await payload.create({
    collection: 'forms',
    data: {
      title: 'Newsletter',
      fields: [{ blockType: 'email', name: 'email', label: 'Email', required: true }],
      confirmationType: 'message',
      confirmationMessage: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Thanks for signing up!',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    req,
  })

  payload.logger.info(`— Seeding home page...`)

  await payload.create({
    collection: 'pages',
    data: pardesHome({ birds, cardEvents, cardLibrary, cardPrograms, faculty, hero, tree }),
    depth: 0,
    req,
  })

  payload.logger.info(`— Seeding globals...`)

  await payload.updateGlobal({
    slug: 'header',
    data: pardesHeader,
    req,
  })
  await payload.updateGlobal({
    slug: 'footer',
    data: pardesFooter(newsletterForm.id),
    req,
  })

  payload.logger.info('Seeded database successfully!')
}
