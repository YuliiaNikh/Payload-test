// Loads the Northwind demo content (EN + HE) once. Safe to run on every deploy:
// it skips when Site settings already record this seed version, and it never deletes anything.
// `pnpm seed -- --force` adds the content again (local use).
import { getPayload } from 'payload'

import config from '@payload-config'
import { seedDemo } from '@/seed'

const payload = await getPayload({ config })
const result = await seedDemo(payload, { force: process.argv.includes('--force') })
payload.logger.info(`[seed] ${result === 'seeded' ? 'Demo content loaded' : 'Demo content already present, skipped'}`)
process.exit(0)
