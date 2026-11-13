// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import type { User } from '@/payload-types'

let payload: Payload
const suffix = Date.now()
const created: number[] = []

const makeUser = async (role: 'admin' | 'editor') => {
  const user = await payload.create({
    collection: 'users',
    data: { email: `${role}-${suffix}@example.test`, password: 'test-password-1', role },
  })
  created.push(user.id)
  return user as User
}

describe('Users access', () => {
  let admin: User
  let editor: User

  beforeAll(async () => {
    payload = await getPayload({ config })
    admin = await makeUser('admin')
    editor = await makeUser('editor')
  })

  afterAll(async () => {
    await payload.delete({ collection: 'users', where: { id: { in: created } } })
  })

  it('stops editors creating users', async () => {
    await expect(
      payload.create({
        collection: 'users',
        data: { email: `x-${suffix}@example.test`, password: 'test-password-1', role: 'editor' },
        overrideAccess: false,
        user: { ...editor, collection: 'users' },
      }),
    ).rejects.toThrow()
  })

  it('stops editors promoting themselves', async () => {
    const updated = await payload.update({
      collection: 'users',
      id: editor.id,
      data: { role: 'admin' },
      overrideAccess: false,
      user: { ...editor, collection: 'users' },
    })
    expect(updated.role).toBe('editor')
  })

  it('shows editors only their own account', async () => {
    const { docs } = await payload.find({
      collection: 'users',
      overrideAccess: false,
      user: { ...editor, collection: 'users' },
    })
    expect(docs.map((d) => d.id)).toEqual([editor.id])
  })

  it('lets admins change roles', async () => {
    const updated = await payload.update({
      collection: 'users',
      id: editor.id,
      data: { role: 'admin' },
      overrideAccess: false,
      user: { ...admin, collection: 'users' },
    })
    expect(updated.role).toBe('admin')
  })
})
