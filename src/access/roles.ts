import type { Access, FieldAccess } from 'payload'

export type Role = 'admin' | 'editor'

const roleOf = (user: unknown): Role | undefined =>
  (user as { role?: Role } | null | undefined)?.role

export const isAdmin: Access = ({ req: { user } }) => roleOf(user) === 'admin'

// Admins and editors: everyone who manages content
export const isStaff: Access = ({ req: { user } }) => {
  const role = roleOf(user)
  return role === 'admin' || role === 'editor'
}

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (roleOf(user) === 'admin') return true
  return { id: { equals: user.id } }
}

export const isAdminField: FieldAccess = ({ req: { user } }) => roleOf(user) === 'admin'

// Visitors see published content only (per language when localizeStatus is on)
export const publishedOrStaff: Access = ({ req: { user } }) =>
  user ? true : { _status: { equals: 'published' } }
