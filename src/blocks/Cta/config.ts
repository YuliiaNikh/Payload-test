import { sectionBlock } from '@/fields/blockStyle'
import { linksField } from '@/fields/link'

export const CtaBlock = sectionBlock({
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'text', type: 'textarea' },
    linksField(),
  ],
})
