import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { en } from '@payloadcms/translations/languages/en'
import { he } from '@payloadcms/translations/languages/he'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { Glossary } from './collections/Glossary'
import { Pages } from './collections/Pages'
import { ReusableSections } from './collections/ReusableSections'
import { allBlocks } from './blocks/registry'
import { CptDefaults } from './globals/CptDefaults'
import { People } from './collections/People'
import { Posts } from './collections/Posts'
import { Resources } from './collections/Resources'
import { hierarchicalTaxonomies, taxonomies } from './collections/taxonomies'
import { SiteSettings } from './globals/SiteSettings'
import { defaultLocale, localeLabels, locales } from './i18n/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks: allBlocks,
  collections: [Pages, Posts, Events, Resources, Glossary, People, ReusableSections, ...taxonomies, Media, Users],
  globals: [SiteSettings, CptDefaults],
  localization: {
    locales: locales.map((code) => ({ code, label: localeLabels[code], rtl: code === 'he' })),
    defaultLocale,
    // A missing Hebrew version must not show English text on the site
    fallback: false,
  },
  experimental: {
    localizeStatus: true,
  },
  i18n: {
    supportedLanguages: { en, he },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    // Dev uses schema push; production applies the committed migrations in ./migrations (Vercel build)
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  // Without RESEND_API_KEY there is no email adapter (Payload logs emails to the console)
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        apiKey: process.env.RESEND_API_KEY,
        defaultFromAddress: process.env.RESEND_FROM_ADDRESS || 'onboarding@resend.dev',
        defaultFromName: process.env.RESEND_FROM_NAME || 'Payload',
      })
    : undefined,
  sharp,
  plugins: [
    nestedDocsPlugin({
      collections: ['pages', ...hierarchicalTaxonomies],
      generateLabel: (_, doc) => String(doc.title ?? ''),
      // Breadcrumbs are localized, so this builds the path per language
      generateURL: (docs) => `/${docs.map((doc) => doc.slug ?? '').join('/')}`,
    }),
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      // Add the blob fields even when disabled, so local migrations match production
      alwaysInsertFields: true,
      clientUploads: false,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
