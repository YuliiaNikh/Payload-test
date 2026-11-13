import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

import { createPreviewToken } from '@/lib/preview/token'
import { siteUrl } from '@/lib/siteUrl'

// Creates a shareable 7-day preview link for one document (logged-in users only)
export async function GET(request: Request): Promise<Response> {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: await headers() })
  if (!user) return Response.json({ error: 'Log in first.' }, { status: 401 })

  const params = new URL(request.url).searchParams
  const id = Number(params.get('id'))
  const collection = params.get('collection') ?? ''
  if (!Number.isInteger(id) || !collection) return Response.json({ error: 'Save the document first.' }, { status: 400 })

  const token = createPreviewToken({ collection, id, locale: params.get('locale') ?? 'en' })
  return Response.json({ url: `${siteUrl()}/next/preview?token=${token}` })
}
