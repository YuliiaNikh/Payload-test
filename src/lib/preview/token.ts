import { createHmac, timingSafeEqual } from 'node:crypto'

export type PreviewTarget = { collection: string; id: number; locale: string }
type Payload = PreviewTarget & { exp: number }

const secret = () => {
  const value = process.env.PAYLOAD_SECRET
  if (!value) throw new Error('PAYLOAD_SECRET is required to sign preview links')
  return value
}

const sign = (body: string) => createHmac('sha256', secret()).update(`preview:${body}`).digest('base64url')

// A shareable, expiring link to one draft: "<base64url json>.<hmac>"
export function createPreviewToken(target: PreviewTarget, ttlSeconds = 7 * 24 * 3600, now = Date.now()): string {
  const body = Buffer.from(JSON.stringify({ ...target, exp: Math.floor(now / 1000) + ttlSeconds } satisfies Payload)).toString('base64url')
  return `${body}.${sign(body)}`
}

export function readPreviewToken(token: string | null | undefined, now = Date.now()): PreviewTarget | null {
  if (!token) return null
  const [body, signature] = token.split('.')
  if (!body || !signature) return null
  const expected = Buffer.from(sign(body))
  const given = Buffer.from(signature)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null
  try {
    const data = JSON.parse(Buffer.from(body, 'base64url').toString()) as Payload
    if (typeof data.exp !== 'number' || data.exp * 1000 < now) return null
    return { collection: data.collection, id: data.id, locale: data.locale }
  } catch {
    return null
  }
}
