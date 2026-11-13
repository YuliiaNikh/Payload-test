// ONE-TIME, FLAG-GATED WIPE used to reset the live site to an empty database and blob store.
//
// It runs at the start of every Vercel build (see vercel.json) but does nothing unless
// RESET_PRODUCTION_DATA is set to exactly 'wipe-everything'. When set, it:
//   1. drops and recreates the `public` schema in DATABASE_URL (other schemas, e.g. neon_auth,
//      are left alone), so `payload migrate` that follows starts from an empty database;
//   2. deletes every blob in the Vercel Blob store, if BLOB_READ_WRITE_TOKEN is set.
// Remove the env var right after the reset deploy, or every build will wipe the site again.
//
// Plain Node ESM on purpose (no TypeScript, no path aliases): it runs before anything is compiled.
import { del, list } from '@vercel/blob'
import pg from 'pg'

const FLAG = 'wipe-everything'

if (process.env.RESET_PRODUCTION_DATA !== FLAG) {
  console.log(`[reset-production] Skipped: RESET_PRODUCTION_DATA is not '${FLAG}'.`)
  process.exit(0)
}

async function resetDatabase() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) throw new Error('DATABASE_URL is not set')

  const client = new pg.Client({ connectionString })
  await client.connect()
  try {
    const { rows } = await client.query(
      `SELECT count(*)::int AS n FROM information_schema.tables WHERE table_schema = 'public'`,
    )
    console.log(`[reset-production] Dropping schema public (${rows[0].n} tables)...`)
    await client.query('BEGIN')
    await client.query('DROP SCHEMA public CASCADE')
    await client.query('CREATE SCHEMA public')
    await client.query('GRANT ALL ON SCHEMA public TO public')
    await client.query('GRANT ALL ON SCHEMA public TO current_user')
    await client.query('COMMIT')
    console.log('[reset-production] Schema public recreated empty.')
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {})
    throw error
  } finally {
    await client.end()
  }
}

async function resetBlobs() {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) {
    console.log('[reset-production] BLOB_READ_WRITE_TOKEN not set; skipping blob store.')
    return
  }

  let deleted = 0
  let cursor
  do {
    const page = await list({ token, cursor, limit: 1000 })
    const urls = page.blobs.map((blob) => blob.url)
    for (let i = 0; i < urls.length; i += 100) {
      const batch = urls.slice(i, i + 100)
      await del(batch, { token })
      deleted += batch.length
    }
    cursor = page.hasMore ? page.cursor : undefined
  } while (cursor)

  console.log(`[reset-production] Deleted ${deleted} blobs.`)
}

try {
  await resetDatabase()
  await resetBlobs()
  console.log('[reset-production] Done.')
} catch (error) {
  console.error('[reset-production] FAILED:', error)
  process.exit(1)
}
