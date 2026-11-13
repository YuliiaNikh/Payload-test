import type { UIField } from 'payload'

// "Create preview link" button in the sidebar of documents with a front-end page
export const previewLinkField = (): UIField => ({
  name: 'previewLink',
  type: 'ui',
  admin: {
    position: 'sidebar',
    components: { Field: '@/components/admin/PreviewLink#PreviewLink' },
  },
})
