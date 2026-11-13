// @vitest-environment node
import { beforeAll, describe, expect, it } from 'vitest'

import { createPreviewToken, readPreviewToken } from '@/lib/preview/token'

beforeAll(() => {
  process.env.PAYLOAD_SECRET ||= 'test-secret'
})

const target = { collection: 'pages', id: 5, locale: 'he' }

describe('preview tokens', () => {
  it('round-trips the target', () => {
    expect(readPreviewToken(createPreviewToken(target))).toEqual(target)
  })

  it('rejects tampered tokens', () => {
    const [body, sig] = createPreviewToken(target).split('.')
    const forged = Buffer.from(JSON.stringify({ ...target, id: 6, exp: 9e9 })).toString('base64url')
    expect(readPreviewToken(`${forged}.${sig}`)).toBeNull()
    expect(readPreviewToken(`${body}.x${sig}`)).toBeNull()
    expect(readPreviewToken('garbage')).toBeNull()
  })

  it('rejects expired tokens', () => {
    const token = createPreviewToken(target, 60, Date.now() - 120_000)
    expect(readPreviewToken(token)).toBeNull()
  })
})
