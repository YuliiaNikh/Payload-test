import { sectionBlock } from '@/fields/blockStyle'

// Embeds a form built in HubSpot. The form ID can differ per language (the layout is per language).
export const HubSpotFormBlock = sectionBlock({
  slug: 'hubspotForm',
  interfaceName: 'HubSpotFormBlock',
  labels: { singular: 'HubSpot form', plural: 'HubSpot forms' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'text', type: 'textarea' },
    {
      name: 'formId',
      label: 'HubSpot form ID',
      type: 'text',
      required: true,
      admin: { description: 'From HubSpot → Marketing → Forms → Share → Embed code ("formId"). The portal ID is in Site settings.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'display',
          type: 'select',
          defaultValue: 'inline',
          options: [
            { label: 'On the page', value: 'inline' },
            { label: 'Popup from a button', value: 'popup' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: 'Contact us',
          admin: { width: '50%', condition: (_, s) => s?.display === 'popup' },
        },
      ],
    },
  ],
})
