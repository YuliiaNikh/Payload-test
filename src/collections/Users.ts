import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

import { isAdmin, isAdminField, isAdminOrSelf } from '@/access/roles'

// The very first account (created from the admin "Create first user" screen) is an admin
const firstUserIsAdmin: CollectionBeforeChangeHook = async ({ data, operation, req }) => {
  if (operation !== 'create') return data
  const { totalDocs } = await req.payload.count({ collection: 'users', req })
  return totalDocs === 0 ? { ...data, role: 'admin' } : data
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  auth: true,
  access: {
    admin: ({ req: { user } }) => Boolean(user),
    create: isAdmin,
    delete: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  hooks: {
    beforeChange: [firstUserIsAdmin],
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        create: isAdminField,
        update: isAdminField,
      },
      admin: {
        position: 'sidebar',
        description: 'Admins also manage users and site settings.',
      },
    },
  ],
}
