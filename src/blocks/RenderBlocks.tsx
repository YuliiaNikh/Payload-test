import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CardsSectionBlock } from '@/blocks/CardsSection/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { ImageTextBlock } from '@/blocks/ImageText/Component'
import { ImpactBlock } from '@/blocks/Impact/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { PeopleCarouselBlock } from '@/blocks/PeopleCarousel/Component'
import { Reveal } from '@/components/Reveal'

const blockComponents = {
  archive: ArchiveBlock,
  cardsSection: CardsSectionBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  imageText: ImageTextBlock,
  impact: ImpactBlock,
  mediaBlock: MediaBlock,
  peopleCarousel: PeopleCarouselBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Reveal className="my-10 md:my-14" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </Reveal>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
