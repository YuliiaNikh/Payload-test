import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { en } from '@payloadcms/translations/languages/en'
import { he } from '@payloadcms/translations/languages/he'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { Glossary } from './collections/Glossary'
import { Footers } from './collections/Footers'
import { Headers } from './collections/Headers'
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
import { cptSlugs, taxonomySlugs } from './content/types'
import { isAdmin } from './access/roles'

const serverURL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    // Live preview beside the editor; the preview route enables draft mode for logged-in users
    livePreview: {
      collections: ['pages', ...cptSlugs],
      url: ({ data, collectionConfig, locale }) =>
        data?.id
          ? `${serverURL}/next/preview?collection=${collectionConfig?.slug}&id=${data.id}&locale=${locale?.code ?? 'en'}`
          : null,
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 390, height: 844 },
        { label: 'Tablet', name: 'tablet', width: 820, height: 1180 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks: allBlocks,
  collections: [Pages, Posts, Events, Resources, Glossary, People, ReusableSections, Headers, Footers, ...taxonomies, Media, Users],
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
  jobs: {
    access: {
      // Logged-in users, or the Vercel cron with CRON_SECRET (scheduled publishing)
      run: ({ req }) =>
        Boolean(req.user) ||
        Boolean(process.env.CRON_SECRET && req.headers.get('authorization') === `Bearer ${process.env.CRON_SECRET}`),
    },
    // Locally there is no cron: run due jobs every minute while the dev server is up
    autoRun: [{ cron: '* * * * *', allQueues: true }],
    shouldAutoRun: () => process.env.NODE_ENV !== 'production',
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
    // Yoast-style SEO tab on pages, CPT items and taxonomy terms
    seoPlugin({
      collections: ['pages', ...cptSlugs, ...taxonomySlugs],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => String((doc as { title?: string })?.title ?? ''),
      generateDescription: ({ doc }) => String((doc as { excerpt?: string })?.excerpt ?? ''),
      fields: ({ defaultFields }) => [
        ...defaultFields,
        { name: 'noindex', label: 'Hide from search engines (noindex)', type: 'checkbox' },
        { name: 'canonical', label: 'Canonical URL (optional override)', type: 'text', localized: true },
      ],
    }),
    redirectsPlugin({
      collections: ['pages', ...cptSlugs],
      redirectTypes: ['301', '302'],
      overrides: {
        admin: { group: 'Site' },
        access: { read: () => true, create: isAdmin, update: isAdmin, delete: isAdmin },
      },
    }),
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
