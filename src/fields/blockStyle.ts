import type { Block, Field } from 'payload'

export const blockStyleField: Field = {
  name: 'style',
  type: 'group',
  label: false,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'background',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Light grey', value: 'surface' },
            { label: 'Brand tint', value: 'accent' },
            { label: 'Dark', value: 'dark' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'spacing',
          type: 'select',
          defaultValue: 'md',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'align',
          type: 'select',
          defaultValue: 'start',
          options: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
          ],
          admin: { width: '33%' },
        },
      ],
    },
  ],
}

type SectionBlockOptions = Pick<Block, 'slug' | 'labels' | 'fields'> & { interfaceName: string }

// Every section block: a Content tab plus a Style tab (phase 6 adds Visibility here)
export const sectionBlock = ({ slug, labels, fields, interfaceName }: SectionBlockOptions): Block => ({
  slug,
  labels,
  interfaceName,
  fields: [
    {
      type: 'tabs',
      tabs: [
        { label: 'Content', fields },
        { label: 'Style', fields: [blockStyleField] },
      ],
    },
  ],
})
