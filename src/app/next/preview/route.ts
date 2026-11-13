import config from '@payload-config'
import { draftMode, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import { draftPath } from '@/lib/preview/docPath'
import { readPreviewToken, type PreviewTarget } from '@/lib/preview/token'

// Turns on draft mode and opens the document's page.
// Logged-in editors (admin live preview) pass collection/id/locale; anyone else needs a signed share token.
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  let target: PreviewTarget | null = readPreviewToken(url.searchParams.get('token'))

  if (!target) {
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: await headers() })
    const id = Number(url.searchParams.get('id'))
    if (!user || !Number.isInteger(id)) return new Response('Preview link is invalid or has expired.', { status: 401 })
    target = { collection: url.searchParams.get('collection') ?? '', id, locale: url.searchParams.get('locale') ?? 'en' }
  }

  const path = await draftPath(target.collection, target.id, target.locale)
  if (!path) return new Response('Nothing to preview yet: give the document a title and slug first.', { status: 404 })

  ;(await draftMode()).enable()
  redirect(path)
}
