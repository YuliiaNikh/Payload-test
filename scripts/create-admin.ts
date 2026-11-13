// Creates an admin user, or resets an existing user's password and unlocks the account.
// Run it yourself in a terminal (`pnpm create-admin`); it asks for the email and password.
import { stdin, stdout } from 'node:process'
import { createInterface } from 'node:readline/promises'
import { getPayload } from 'payload'

import config from '@payload-config'

const rl = createInterface({ input: stdin, output: stdout })
const email = (await rl.question('Admin email: ')).trim().toLowerCase()
const password = await rl.question('New password (min 8 chars): ')
rl.close()

if (!email.includes('@') || password.length < 8) {
  console.error('Need a valid email and a password of at least 8 characters.')
  process.exit(1)
}

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'users', where: { email: { equals: email } } })

if (docs[0]) {
  await payload.update({
    collection: 'users',
    id: docs[0].id,
    data: { password, role: 'admin' },
  })
  // Failed logins lock the account; a new password doesn't clear that
  await payload.db.updateOne({
    collection: 'users',
    id: docs[0].id,
    data: { lockUntil: null, loginAttempts: 0 },
  })
  console.log(`Password reset and account unlocked for ${email}.`)
} else {
  await payload.create({
    collection: 'users',
    data: { email, password, role: 'admin' },
  })
  console.log(`Created admin ${email}.`)
}
// Shows which database was changed (host only), so a wrong env file is obvious
console.log(`Database: ${new URL(process.env.DATABASE_URL || 'postgres://unset').hostname}`)
process.exit(0)
