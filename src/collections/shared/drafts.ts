import type { CollectionConfig } from 'payload'

// Drafts with autosave; each language has its own draft/published status
export const localizedDrafts: CollectionConfig['versions'] = {
  drafts: {
    autosave: { interval: 2000 },
    localizeStatus: true,
  },
  maxPerDoc: 50,
}
