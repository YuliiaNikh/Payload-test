# payload-test

A Payload 3 + Next.js project, started from Payload's official `blank` template.
Postgres for data, Vercel Blob for uploads, Resend for email, deployed on Vercel.

## Local setup

1. `cp .env.example .env` and fill in at least `DATABASE_URL` and `PAYLOAD_SECRET`.
2. Postgres runs in the Docker container `payload-test-postgres` (user `payload`, database
   `payload`). `docker-compose.yml` describes an equivalent container if you need to recreate it.
   Use `docker exec -it payload-test-postgres psql -U payload -d payload` for a SQL shell.
3. `pnpm install`
4. `pnpm payload migrate` to apply the committed migrations.
5. `pnpm dev`, then open http://localhost:3000/admin and create the first user.

`pnpm create-admin` resets a user's password (or creates the user) and unlocks the account.
It prints the database host it changed, so a wrong env file is obvious.

Without `BLOB_READ_WRITE_TOKEN`, uploads are stored on local disk. Without `RESEND_API_KEY`,
emails are only logged to the console.

## Collections

- **Users**: auth-enabled, can access the admin panel.
- **Media**: uploads (stored in Vercel Blob when `BLOB_READ_WRITE_TOKEN` is set).

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
