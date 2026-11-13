import config from '@payload-config'
import { getPayload } from 'payload'

import type { HubSpotFormBlock as HubSpotFormData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'
import { HubSpotEmbed } from './HubSpotEmbed'

export async function HubSpotFormBlock({ block, ctx }: { block: HubSpotFormData; ctx: BlockContext }) {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  const portalId = settings.hubspot?.portalId

  return (
    <Section style={block.style} id={block.id} className="hubspot">
      <SectionHeader heading={block.heading} intro={block.text} />
      {portalId ? (
        <HubSpotEmbed
          portalId={portalId}
          formId={block.formId}
          region={settings.hubspot?.region ?? 'na1'}
          display={block.display === 'popup' ? 'popup' : 'inline'}
          buttonLabel={block.buttonLabel || (ctx.locale === 'he' ? 'צור קשר' : 'Contact us')}
          closeLabel={ctx.locale === 'he' ? 'סגירה' : 'Close'}
        />
      ) : (
        <p className="muted small">Add the HubSpot portal ID in Site settings to show this form.</p>
      )}
    </Section>
  )
}
