import config from '@payload-config'
import { getPayload } from 'payload'

import type { ReusableSectionBlock as ReusableSectionData } from '@/payload-types'

import type { BlockContext } from '../context'
import { RenderBlocks } from '../RenderBlocks'

export async function ReusableSectionBlock({ block, ctx }: { block: ReusableSectionData; ctx: BlockContext }) {
  const id = typeof block.section === 'object' ? block.section?.id : block.section
  if (!id) return null

  const payload = await getPayload({ config })
  // Fetch it ourselves so its blocks are populated and only the published version in this language shows
  const { docs } = await payload.find({
    collection: 'reusable-sections',
    locale: ctx.locale,
    draft: false,
    depth: 2,
    limit: 1,
    where: { and: [{ id: { equals: id } }, { _status: { equals: 'published' } }] },
  })
  const section = docs[0]
  if (!section?.layout?.length) return null
  return <RenderBlocks blocks={section.layout} ctx={ctx} />
}
