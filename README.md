# payload-test

An agency evaluation of Payload CMS as a replacement for WordPress + Elementor/Gutenberg,
JetEngine, WPML and Yoast. Payload 3 + Next.js 16, Postgres, Vercel Blob, Resend, on Vercel.

- Comparison and findings: `docs/wp-vs-payload.html`
- Design spec: `docs/superpowers/specs/2026-11-13-wp-replacement-demo-design.md`
- Plans per phase: `docs/superpowers/plans/`
- Live demo: https://payload-test-sand-nu.vercel.app (Hebrew: `/he`, UI kit: `/ui-kit`)

## Local setup

1. `cp .env.example .env` and fill in at least `DATABASE_URL` and `PAYLOAD_SECRET`.
2. Postgres runs in the Docker container `payload-test-postgres` (user `payload`, database
   `payload`). `docker-compose.yml` describes an equivalent container if you need to recreate it.
   Use `docker exec -it payload-test-postgres psql -U payload -d payload` for a SQL shell.
3. `pnpm install`
4. `pnpm payload migrate` to apply the committed migrations.
5. `pnpm seed` to load the bilingual Northwind demo content (runs once per database).
6. `pnpm dev`, then open http://localhost:3000/admin and create the first user (it becomes an admin).

`pnpm create-admin` resets a user's password (or creates the user) and unlocks the account.
It prints the database host it changed, so a wrong env file is obvious.

Without `BLOB_READ_WRITE_TOKEN`, uploads are stored on local disk. Without `RESEND_API_KEY`,
emails are only logged to the console.

## What is in it

- **Languages:** English (no URL prefix) and Hebrew (`/he`, right to left); per-language slugs,
  layouts, menus and publish status. CPT URL bases are translatable in Site settings.
- **Content:** Pages (nested), Blog posts, Events, Resources, Glossary, People, seven taxonomies,
  reusable sections, headers (with mega menus) and footers.
- **Page building:** a block library (`src/blocks`), each block with Content, Style and Visibility
  tabs; page templates; item defaults per CPT.
- **Listing block:** JetEngine-style listings with URL-driven filters, A–Z, sort, pagination.
- **Visibility conditions:** `src/visibility` — add a condition as one file in `conditions/`.
- **SEO:** SEO tab, sitemap, robots, JSON-LD, breadcrumbs, redirects (manual + automatic 301 on
  slug change). **HubSpot** form block and tracking toggle in Site settings.
- **Workflow:** drafts, autosave, live preview, 7-day share links, scheduled publish (jobs run via
  `/api/payload-jobs/run`; Vercel cron needs `CRON_SECRET`), Admin/Editor roles.

## Tests

`pnpm test:int` (unit + integration, local DB) and `pnpm test:e2e` (Playwright, starts or reuses
`pnpm dev`). Both run one file at a time because they share one database.

## Migrations

`pnpm dev` pushes schema changes straight to the local database. Production only ever gets
committed migrations from `src/migrations`:

1. Change a collection or the config.
2. `pnpm migrate:create <name>` to generate a migration, and commit it.
3. `pnpm payload migrate` to apply it locally.

After changing the schema, also run `pnpm generate:types` (and `pnpm generate:importmap` when
adding admin components).

## Deploy (Vercel)

`vercel.json` sets the build command to:

```
node scripts/reset-production.mjs && pnpm payload migrate && pnpm build
```

so every deploy applies pending migrations before building.

`scripts/reset-production.mjs` is a one-time, flag-gated wipe: it does nothing unless
`RESET_PRODUCTION_DATA=wipe-everything` is set, in which case it empties the `public` schema and
the Blob store. Remove that variable immediately after the reset deploy.

Environment variables: see `.env.example`.

## Tests

- `pnpm test:int`: Vitest integration tests (needs a database).
- `pnpm test:e2e`: Playwright end-to-end tests.
