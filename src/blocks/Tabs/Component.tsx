import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import type { TabsBlock as TabsData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'
import { TabsClient } from './TabsClient'

export function TabsBlock({ block }: { block: TabsData; ctx: BlockContext }) {
  const tabs = (block.tabs ?? []).map((tab) => ({
    label: tab.label,
    panel: (
      <div className="tabs__content">
        <RichText data={tab.content} />
        {tab.image && <Media media={tab.image} sizes="(max-width: 900px) 100vw, 40vw" />}
      </div>
    ),
  }))
  return (
    <Section style={block.style} id={block.id}>
      <SectionHeader heading={block.heading} />
      <TabsClient tabs={tabs} />
    </Section>
  )
}
