import type { Block } from 'payload'

// Embeds a section from "Reusable sections": edit it once, every page using it updates
export const ReusableSectionBlock: Block = {
  slug: 'reusableSection',
  interfaceName: 'ReusableSectionBlock',
  labels: { singular: 'Reusable section', plural: 'Reusable sections' },
  fields: [{ name: 'section', type: 'relationship', relationTo: 'reusable-sections', required: true }],
}
