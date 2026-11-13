# Phase 1: Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** EN + HE (RTL) localization, unprefixed English URLs, nested Pages with per-language slugs and per-language publish status, Site settings with a home page, Admin/Editor roles, and a styled empty frontend shell with a language switcher.

**Architecture:** Payload `localization` (en default, he RTL) with `experimental.localizeStatus` so each language has its own draft/published status. Pages use the official nested docs plugin; its breadcrumbs field is localized, so the last breadcrumb URL is the page path per language. Next.js 16 `proxy.ts` rewrites unprefixed URLs to `/en/...` internally and redirects `/en/...` to the unprefixed URL; the App Router serves everything from `src/app/(frontend)/[locale]/[[...path]]/page.tsx`. All routing decisions are pure functions with unit tests.

**Tech Stack:** Payload 3.93, Next.js 16.4 (App Router, `proxy.ts`), Postgres, Vitest, Playwright, pnpm.

**Spec:** `docs/superpowers/specs/2026-11-13-wp-replacement-demo-design.md` (sections 1, 2 "Pages" and "Globals", 9 "Roles", 11).

**Verified facts (probed on a scratch DB, 2026-11-13):**
- With `experimental.localizeStatus: true` and `versions.drafts.localizeStatus: true`, a document published only in `en` is returned in `he` by `find({ draft: false })` with `_status: 'draft'` and empty fields. **Every front-end query must filter `_status: { equals: 'published' }` together with `locale`.** With that filter, unpublished languages are excluded and a newer draft in one language does not leak.
- Locales must all be objects (`{ code, label }`) — mixing a string and an object fails schema validation.
- Nested docs plugin 3.93 creates `breadcrumbs` as a localized array (`doc`, `url`, `label`) and recomputes children per `req.locale`.
- `@payloadcms/translations/languages/he` exports `he`.

**Conventions for every task:**
- Run commands from the repo root `/Users/yuliianikhaienko/PhpstormProjects/payload-test`.
- Local Postgres is the Docker container `payload-test-postgres`; start Docker Desktop and `docker compose up -d` if it is down. Resetting local data is allowed; never touch production data.
- Next.js 16 differs from older versions; before writing routing code read `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.
- Run only the tests named in the step (parallel suites exhaust Postgres connections).
- Commit on `develop`.

---

## File structure

| File | Responsibility |
|---|---|
| `src/i18n/config.ts` | Locale list, default locale, labels, direction. Shared by Payload config and frontend. |
| `src/i18n/paths.ts` | Pure path helpers: split locale from a pathname, build a localized href, normalize catch-all segments. |
| `src/i18n/routing.ts` | Pure `routeRequest(pathname)` → next / rewrite / redirect, used by `proxy.ts`. |
| `src/proxy.ts` | Next.js proxy: applies `routeRequest`. |
| `src/utilities/slugify.ts` | Unicode-aware slug generation (Hebrew allowed). |
| `src/fields/slug.ts` | Reusable localized `slug` field that fills itself from the title. |
| `src/access/roles.ts` | Access helpers: `isAdmin`, `isStaff`, `isAdminOrSelf`, `isAdminField`, `publishedOrStaff`. |
| `src/collections/Users.ts` | Adds `role`, access rules, first user becomes admin. |
| `src/collections/Pages.ts` | Pages collection (title, slug, drafts, per-locale status). |
| `src/globals/SiteSettings.ts` | Site name (per language) and home page. |
| `src/lib/queries/pages.ts` | Published page lookups by path / id, page path, language alternates. |
| `src/components/LanguageSwitcher.tsx` | Language links for the current page. |
| `src/app/(frontend)/[locale]/layout.tsx` | Root layout: `<html lang dir>`, global CSS. |
| `src/app/(frontend)/[locale]/[[...path]]/page.tsx` | Resolves and renders a page. |
| `src/app/(frontend)/[locale]/not-found.tsx` | 404 page. |
| `src/app/(frontend)/styles/tokens.css`, `base.css` | Astryx-inspired tokens and base styles with logical properties. |
| `tests/unit/*.spec.ts` | Pure function tests. |
| `tests/int/*.int.spec.ts` | Payload Local API tests against the local DB. |
| `tests/helpers/seedPages.ts` | Seeds and removes pages for e2e. |
| `tests/e2e/frontend.e2e.spec.ts` | Locale routing end to end. |

Deleted: `src/app/(frontend)/layout.tsx`, `src/app/(frontend)/page.tsx`, `src/app/(frontend)/styles.css`, `src/app/my-route/route.ts`.

---

### Task 1: Locale config and path helpers

**Files:**
- Create: `src/i18n/config.ts`, `src/i18n/paths.ts`
- Modify: `vitest.config.mts`
- Test: `tests/unit/paths.spec.ts`

- [ ] **Step 1: Let Vitest pick up unit tests**

Replace the `include` line in `vitest.config.mts`:

```ts
    include: ['tests/int/**/*.int.spec.ts', 'tests/unit/**/*.spec.ts'],
```

- [ ] **Step 2: Write the failing test**

Create `tests/unit/paths.spec.ts`:

```ts
// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { isLocale, localeDir } from '@/i18n/config'
import { localizePath, normalizePath, splitLocale } from '@/i18n/paths'

describe('locale config', () => {
  it('recognises supported locales only', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('he')).toBe(true)
    expect(isLocale('fr')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })

  it('gives Hebrew right-to-left direction', () => {
    expect(localeDir('he')).toBe('rtl')
    expect(localeDir('en')).toBe('ltr')
  })
})

describe('splitLocale', () => {
  it('treats unprefixed paths as English', () => {
    expect(splitLocale('/about')).toEqual({ locale: 'en', path: '/about', prefixed: false })
    expect(splitLocale('/')).toEqual({ locale: 'en', path: '/', prefixed: false })
  })

  it('extracts a locale prefix', () => {
    expect(splitLocale('/he/about/team')).toEqual({ locale: 'he', path: '/about/team', prefixed: true })
    expect(splitLocale('/he')).toEqual({ locale: 'he', path: '/', prefixed: true })
    expect(splitLocale('/he/')).toEqual({ locale: 'he', path: '/', prefixed: true })
    expect(splitLocale('/en/about')).toEqual({ locale: 'en', path: '/about', prefixed: true })
  })

  it('does not treat words that start with a locale code as a prefix', () => {
    expect(splitLocale('/hebrew')).toEqual({ locale: 'en', path: '/hebrew', prefixed: false })
  })
})

describe('localizePath', () => {
  it('leaves English unprefixed', () => {
    expect(localizePath('en', '/about')).toBe('/about')
    expect(localizePath('en', '/')).toBe('/')
  })

  it('prefixes other locales', () => {
    expect(localizePath('he', '/about')).toBe('/he/about')
    expect(localizePath('he', '/')).toBe('/he')
  })
})

describe('normalizePath', () => {
  it('joins catch-all segments', () => {
    expect(normalizePath(['about', 'team'])).toBe('/about/team')
    expect(normalizePath(undefined)).toBe('/')
    expect(normalizePath([])).toBe('/')
  })

  it('decodes percent-encoded Hebrew segments', () => {
    expect(normalizePath(['%D7%90%D7%95%D7%93%D7%95%D7%AA'])).toBe('/אודות')
    expect(normalizePath(['אודות'])).toBe('/אודות')
  })

  it('keeps malformed encodings as they are', () => {
    expect(normalizePath(['100%'])).toBe('/100%')
  })
})
```

- [ ] **Step 3: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/paths.spec.ts`
Expected: FAIL, cannot resolve `@/i18n/config`.

- [ ] **Step 4: Implement**

Create `src/i18n/config.ts`:

```ts
export const locales = ['en', 'he'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
}

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value)

export const localeDir = (locale: Locale): 'ltr' | 'rtl' => (locale === 'he' ? 'rtl' : 'ltr')
```

Create `src/i18n/paths.ts`:

```ts
import { defaultLocale, isLocale, type Locale } from './config'

// "/he/about" -> he + "/about"; "/about" -> en (default, unprefixed) + "/about"
export function splitLocale(pathname: string): { locale: Locale; path: string; prefixed: boolean } {
  const [, first = '', ...rest] = pathname.split('/')
  if (isLocale(first)) {
    const path = `/${rest.join('/')}`
    return { locale: first, path: path === '/' ? '/' : path.replace(/\/$/, ''), prefixed: true }
  }
  return { locale: defaultLocale, path: pathname || '/', prefixed: false }
}

// The default locale has no prefix: ("en", "/about") -> "/about", ("he", "/") -> "/he"
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

const safeDecode = (segment: string): string => {
  try {
    return decodeURIComponent(segment)
  } catch {
    return segment
  }
}

// Catch-all route segments -> "/a/b"; Next may hand them over percent-encoded
export function normalizePath(segments: string[] | undefined): string {
  if (!segments?.length) return '/'
  return `/${segments.map(safeDecode).join('/')}`
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/paths.spec.ts`
Expected: PASS (all tests).

- [ ] **Step 6: Commit**

```bash
git add vitest.config.mts src/i18n tests/unit/paths.spec.ts
git commit -m "Add locale config and path helpers"
```

---

### Task 2: Request routing for the proxy

**Files:**
- Create: `src/i18n/routing.ts`, `src/proxy.ts`
- Test: `tests/unit/routing.spec.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/unit/routing.spec.ts`:

```ts
// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { routeRequest } from '@/i18n/routing'

describe('routeRequest', () => {
  it('rewrites unprefixed paths to the default locale', () => {
    expect(routeRequest('/')).toEqual({ kind: 'rewrite', pathname: '/en' })
    expect(routeRequest('/about/team')).toEqual({ kind: 'rewrite', pathname: '/en/about/team' })
  })

  it('redirects an explicit default-locale prefix to the unprefixed URL', () => {
    expect(routeRequest('/en')).toEqual({ kind: 'redirect', pathname: '/' })
    expect(routeRequest('/en/about')).toEqual({ kind: 'redirect', pathname: '/about' })
  })

  it('passes other locale prefixes through', () => {
    expect(routeRequest('/he')).toEqual({ kind: 'next' })
    expect(routeRequest('/he/about')).toEqual({ kind: 'next' })
  })

  it('leaves Payload and framework routes alone', () => {
    expect(routeRequest('/admin')).toEqual({ kind: 'next' })
    expect(routeRequest('/admin/collections/pages')).toEqual({ kind: 'next' })
    expect(routeRequest('/api/pages')).toEqual({ kind: 'next' })
    expect(routeRequest('/next/preview')).toEqual({ kind: 'next' })
  })

  it('does not confuse pages whose slug starts like a reserved route', () => {
    expect(routeRequest('/administration')).toEqual({ kind: 'rewrite', pathname: '/en/administration' })
    expect(routeRequest('/apis')).toEqual({ kind: 'rewrite', pathname: '/en/apis' })
  })
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/routing.spec.ts`
Expected: FAIL, cannot resolve `@/i18n/routing`.

- [ ] **Step 3: Implement**

Create `src/i18n/routing.ts`:

```ts
import { defaultLocale } from './config'
import { splitLocale } from './paths'

export type ProxyAction =
  | { kind: 'next' }
  | { kind: 'rewrite'; pathname: string }
  | { kind: 'redirect'; pathname: string }

// First path segments served by Payload or Next itself, never by the page router
const RESERVED = new Set(['admin', 'api', 'next', '_next'])

export function routeRequest(pathname: string): ProxyAction {
  const first = pathname.split('/')[1] ?? ''
  if (RESERVED.has(first)) return { kind: 'next' }

  const { locale, path, prefixed } = splitLocale(pathname)
  if (prefixed && locale === defaultLocale) return { kind: 'redirect', pathname: path }
  if (prefixed) return { kind: 'next' }
  return { kind: 'rewrite', pathname: path === '/' ? `/${defaultLocale}` : `/${defaultLocale}${path}` }
}
```

Create `src/proxy.ts`:

```ts
import { NextResponse, type NextRequest } from 'next/server'

import { routeRequest } from './i18n/routing'

export function proxy(request: NextRequest) {
  const action = routeRequest(request.nextUrl.pathname)
  if (action.kind === 'next') return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = action.pathname
  return action.kind === 'redirect' ? NextResponse.redirect(url, 308) : NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and any path with a file extension (favicon.ico, robots.txt, images)
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/routing.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/routing.ts src/proxy.ts tests/unit/routing.spec.ts
git commit -m "Route unprefixed URLs to English through proxy.ts"
```

---

### Task 3: Slugify and the slug field

**Files:**
- Create: `src/utilities/slugify.ts`, `src/fields/slug.ts`
- Test: `tests/unit/slugify.spec.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/unit/slugify.spec.ts`:

```ts
// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { slugify } from '@/utilities/slugify'

describe('slugify', () => {
  it('lowercases and dashes Latin text', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
    expect(slugify('  About   Us  ')).toBe('about-us')
  })

  it('keeps Hebrew letters', () => {
    expect(slugify('אודות הצוות')).toBe('אודות-הצוות')
  })

  it('drops Hebrew vowel marks and quote marks', () => {
    expect(slugify('שָׁלוֹם')).toBe('שלום')
    expect(slugify('צה״ל')).toBe('צהל')
    expect(slugify("Don't stop")).toBe('dont-stop')
  })

  it('keeps digits and trims stray dashes', () => {
    expect(slugify('--Top 10 tips--')).toBe('top-10-tips')
  })

  it('returns an empty string when nothing usable is left', () => {
    expect(slugify('!!!')).toBe('')
  })
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/slugify.spec.ts`
Expected: FAIL, cannot resolve `@/utilities/slugify`.

- [ ] **Step 3: Implement**

Create `src/utilities/slugify.ts`:

```ts
// Unicode-aware: keeps letters in any script (Hebrew URLs are allowed), drops marks and punctuation
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/['"`’׳״]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}
```

Create `src/fields/slug.ts`:

```ts
import type { TextField } from 'payload'

import { slugify } from '@/utilities/slugify'

// Localized slug, filled from the source field when left empty
export const slugField = (source = 'title'): TextField => ({
  name: 'slug',
  type: 'text',
  localized: true,
  index: true,
  required: true,
  admin: {
    position: 'sidebar',
    description: 'URL part for this language. Filled from the title when empty.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        const raw = typeof value === 'string' && value.trim() ? value : data?.[source]
        return typeof raw === 'string' ? slugify(raw) : value
      },
    ],
  },
})
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/slugify.spec.ts`
Expected: PASS.

Note: NFKD splits accented Latin letters into letter + mark, so `Café` becomes `cafe`; that is intended.

- [ ] **Step 5: Commit**

```bash
git add src/utilities/slugify.ts src/fields/slug.ts tests/unit/slugify.spec.ts
git commit -m "Add Unicode slugify and a localized slug field"
```

---

### Task 4: Roles and access helpers

**Files:**
- Create: `src/access/roles.ts`
- Modify: `src/collections/Users.ts`, `scripts/create-admin.ts`, `tests/helpers/seedUser.ts`
- Test: `tests/int/users.int.spec.ts`

- [ ] **Step 1: Write the access helpers**

Create `src/access/roles.ts`:

```ts
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
```

- [ ] **Step 2: Add the role field and access to Users**

Replace `src/collections/Users.ts`:

```ts
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
```

- [ ] **Step 3: Make scripts create admins**

In `scripts/create-admin.ts`, change the update call's data to `data: { password, role: 'admin' },` and the create call's data to `data: { email, password, role: 'admin' },`.

In `tests/helpers/seedUser.ts`, change the create call to:

```ts
  await payload.create({
    collection: 'users',
    data: { ...testUser, role: 'admin' },
  })
```

- [ ] **Step 4: Regenerate types**

Run: `pnpm generate:types`
Expected: `src/payload-types.ts` now has `role: 'admin' | 'editor';` on `User`.

- [ ] **Step 5: Write the failing access test**

Create `tests/int/users.int.spec.ts`:

```ts
// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import type { User } from '@/payload-types'

let payload: Payload
const suffix = Date.now()
const created: number[] = []

const makeUser = async (role: 'admin' | 'editor') => {
  const user = await payload.create({
    collection: 'users',
    data: { email: `${role}-${suffix}@example.test`, password: 'test-password-1', role },
  })
  created.push(user.id)
  return user as User
}

describe('Users access', () => {
  let admin: User
  let editor: User

  beforeAll(async () => {
    payload = await getPayload({ config })
    admin = await makeUser('admin')
    editor = await makeUser('editor')
  })

  afterAll(async () => {
    await payload.delete({ collection: 'users', where: { id: { in: created } } })
  })

  it('stops editors creating users', async () => {
    await expect(
      payload.create({
        collection: 'users',
        data: { email: `x-${suffix}@example.test`, password: 'test-password-1', role: 'editor' },
        overrideAccess: false,
        user: { ...editor, collection: 'users' },
      }),
    ).rejects.toThrow()
  })

  it('stops editors promoting themselves', async () => {
    const updated = await payload.update({
      collection: 'users',
      id: editor.id,
      data: { role: 'admin' },
      overrideAccess: false,
      user: { ...editor, collection: 'users' },
    })
    expect(updated.role).toBe('editor')
  })

  it('shows editors only their own account', async () => {
    const { docs } = await payload.find({
      collection: 'users',
      overrideAccess: false,
      user: { ...editor, collection: 'users' },
    })
    expect(docs.map((d) => d.id)).toEqual([editor.id])
  })

  it('lets admins change roles', async () => {
    const updated = await payload.update({
      collection: 'users',
      id: editor.id,
      data: { role: 'admin' },
      overrideAccess: false,
      user: { ...admin, collection: 'users' },
    })
    expect(updated.role).toBe('admin')
  })
})
```

- [ ] **Step 6: Run the test**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/users.int.spec.ts`
Expected: PASS (4 tests). The first run pushes the new `role` column to the local DB; if Payload asks to confirm data loss, answer yes (local resets are allowed).

- [ ] **Step 7: Commit**

```bash
git add src/access src/collections/Users.ts src/payload-types.ts scripts/create-admin.ts tests/helpers/seedUser.ts tests/int/users.int.spec.ts
git commit -m "Add admin and editor roles"
```

---

### Task 5: Localization, Pages and Site settings

**Files:**
- Create: `src/collections/Pages.ts`, `src/globals/SiteSettings.ts`
- Modify: `src/payload.config.ts`, `package.json` (new deps)

- [ ] **Step 1: Add dependencies**

Run: `pnpm add @payloadcms/plugin-nested-docs@3.93.0 @payloadcms/translations@3.93.0`
Expected: both appear in `dependencies` at `3.93.0`.

- [ ] **Step 2: Create the Pages collection**

Create `src/collections/Pages.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  access: {
    read: publishedOrStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
      // Each language has its own draft/published status (needs experimental.localizeStatus)
      localizeStatus: true,
    },
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
  ],
}
```

The nested docs plugin (Step 4) adds `parent` and the localized `breadcrumbs`.

- [ ] **Step 3: Create Site settings**

Create `src/globals/SiteSettings.ts`:

```ts
import type { GlobalConfig } from 'payload'

import { isAdmin } from '@/access/roles'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Payload demo',
    },
    {
      name: 'homePage',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        description: 'Shown at / (and /he in Hebrew), like "Your homepage displays" in WordPress.',
      },
    },
  ],
}
```

- [ ] **Step 4: Wire everything into the Payload config**

In `src/payload.config.ts`:

Add imports below the existing ones:

```ts
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { en } from '@payloadcms/translations/languages/en'
import { he } from '@payloadcms/translations/languages/he'

import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'
import { defaultLocale, localeLabels, locales } from './i18n/config'
```

Change `collections: [Users, Media],` to:

```ts
  collections: [Pages, Media, Users],
  globals: [SiteSettings],
  localization: {
    locales: locales.map((code) => ({ code, label: localeLabels[code], rtl: code === 'he' })),
    defaultLocale,
    // A missing Hebrew version must not show English text on the site
    fallback: false,
  },
  experimental: {
    localizeStatus: true,
  },
  i18n: {
    supportedLanguages: { en, he },
  },
```

Add the plugin as the first entry of `plugins: [`:

```ts
    nestedDocsPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => String(doc.title ?? ''),
      // Breadcrumbs are localized, so this builds the path per language
      generateURL: (docs) => `/${docs.map((doc) => doc.slug ?? '').join('/')}`,
    }),
```

- [ ] **Step 5: Regenerate types and the import map**

Run: `pnpm generate:types && pnpm generate:importmap`
Expected: `src/payload-types.ts` contains `interface Page` with `slug`, `parent`, `breadcrumbs`, `_status`, and `interface SiteSetting` with `siteName` and `homePage`.

- [ ] **Step 6: Check it type-checks**

Run: `pnpm tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml src/collections/Pages.ts src/globals src/payload.config.ts src/payload-types.ts "src/app/(payload)/admin/importMap.js"
git commit -m "Add EN/HE localization, nested Pages and Site settings"
```

---

### Task 6: Published page queries

**Files:**
- Create: `src/lib/queries/pages.ts`
- Test: `tests/int/pages.int.spec.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/int/pages.int.spec.ts`:

```ts
// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import {
  findPublishedPageByPath,
  getHomePageId,
  getPageAlternates,
} from '@/lib/queries/pages'
import type { Page, SiteSetting } from '@/payload-types'

let payload: Payload
const s = Date.now()
let parent: Page
let child: Page
let home: Page
let previousSettings: SiteSetting

describe('published page queries', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
    previousSettings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })

    home = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Home ${s}`, slug: `home-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'pages',
      id: home.id,
      locale: 'he',
      data: { title: `בית ${s}`, slug: `bait-${s}`, _status: 'published' },
    })

    parent = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `About ${s}`, slug: `about-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'pages',
      id: parent.id,
      locale: 'he',
      data: { title: `אודות ${s}`, slug: `אודות-${s}`, _status: 'published' },
    })

    // English only
    child = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Team ${s}`, slug: `team-${s}`, parent: parent.id, _status: 'published' },
    })

    await payload.updateGlobal({ slug: 'site-settings', data: { homePage: home.id } })
  })

  afterAll(async () => {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: { homePage: previousSettings.homePage ?? null },
    })
    await payload.delete({ collection: 'pages', where: { id: { in: [child.id, parent.id, home.id] } } })
  })

  it('finds a nested page by its full English path', async () => {
    const page = await findPublishedPageByPath(`/about-${s}/team-${s}`, 'en')
    expect(page?.id).toBe(child.id)
  })

  it('returns the parent, not the child, for the parent path', async () => {
    const page = await findPublishedPageByPath(`/about-${s}`, 'en')
    expect(page?.id).toBe(parent.id)
  })

  it('finds a page by its Hebrew slug', async () => {
    const page = await findPublishedPageByPath(`/אודות-${s}`, 'he')
    expect(page?.id).toBe(parent.id)
    expect(page?.title).toBe(`אודות ${s}`)
  })

  it('does not return a page that is not published in that language', async () => {
    expect(await findPublishedPageByPath(`/team-${s}`, 'he')).toBeNull()
    expect(await findPublishedPageByPath(`/אודות-${s}/team-${s}`, 'he')).toBeNull()
  })

  it('does not return a page that is only a draft', async () => {
    const draft = await payload.create({
      collection: 'pages',
      locale: 'en',
      draft: true,
      data: { title: `Draft ${s}`, slug: `draft-${s}`, _status: 'draft' },
    })
    expect(await findPublishedPageByPath(`/draft-${s}`, 'en')).toBeNull()
    await payload.delete({ collection: 'pages', id: draft.id })
  })

  it('serves the home page from Site settings at /', async () => {
    expect(await getHomePageId()).toBe(home.id)
    expect((await findPublishedPageByPath('/', 'en'))?.id).toBe(home.id)
    expect((await findPublishedPageByPath('/', 'he'))?.title).toBe(`בית ${s}`)
  })

  it('links each language version, falling back to that language home page', async () => {
    expect(await getPageAlternates(parent.id)).toEqual({
      en: `/about-${s}`,
      he: `/he/אודות-${s}`,
    })
    expect(await getPageAlternates(child.id)).toEqual({
      en: `/about-${s}/team-${s}`,
      he: '/he',
    })
    expect(await getPageAlternates(home.id)).toEqual({ en: '/', he: '/he' })
  })
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/pages.int.spec.ts`
Expected: FAIL, cannot resolve `@/lib/queries/pages`.

- [ ] **Step 3: Implement**

Create `src/lib/queries/pages.ts`:

```ts
import config from '@payload-config'
import { getPayload } from 'payload'

import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import type { Page } from '@/payload-types'

// With per-language status, a page unpublished in a language still comes back from
// find() with _status "draft", so every visitor-facing query filters on it explicitly.
const published = { _status: { equals: 'published' } } as const

export async function getHomePageId(): Promise<Page['id'] | null> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  const home = settings.homePage
  if (home == null) return null
  return typeof home === 'object' ? home.id : home
}

export async function findPublishedPageById(id: Page['id'], locale: Locale): Promise<Page | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    draft: false,
    limit: 1,
    where: { and: [{ id: { equals: id } }, published] },
  })
  return docs[0] ?? null
}

export async function findPublishedPageByPath(path: string, locale: Locale): Promise<Page | null> {
  if (path === '/') {
    const homeId = await getHomePageId()
    return homeId == null ? null : findPublishedPageById(homeId, locale)
  }

  const payload = await getPayload({ config })
  // Ancestors' URLs also appear in a child's breadcrumbs, so match on the last breadcrumb
  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    draft: false,
    limit: 50,
    where: { and: [{ 'breadcrumbs.url': { equals: path } }, published] },
  })
  return docs.find((doc) => doc.breadcrumbs?.at(-1)?.url === path) ?? null
}

// Path of a page within its language, without the locale prefix
export function pagePath(page: Pick<Page, 'id' | 'breadcrumbs'>, homeId: Page['id'] | null): string {
  if (homeId != null && page.id === homeId) return '/'
  return page.breadcrumbs?.at(-1)?.url ?? '/'
}

// Href of this page in every language; the language home page when it has no published version
export async function getPageAlternates(id: Page['id']): Promise<Record<Locale, string>> {
  const homeId = await getHomePageId()
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const page = await findPublishedPageById(id, locale)
      return [locale, localizePath(locale, page ? pagePath(page, homeId) : '/')] as const
    }),
  )
  return Object.fromEntries(entries) as Record<Locale, string>
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/pages.int.spec.ts`
Expected: PASS (7 tests).

If "finds a nested page by its full English path" fails because the child's breadcrumbs are missing the parent, check that `generateURL` in `payload.config.ts` matches Task 5 Step 4 exactly.

- [ ] **Step 5: Commit**

```bash
git add src/lib tests/int/pages.int.spec.ts
git commit -m "Add published page lookups per language"
```

---

### Task 7: Frontend routes, styles and language switcher

**Files:**
- Delete: `src/app/(frontend)/layout.tsx`, `src/app/(frontend)/page.tsx`, `src/app/(frontend)/styles.css`, `src/app/my-route/route.ts`
- Create: `src/app/(frontend)/styles/tokens.css`, `src/app/(frontend)/styles/base.css`, `src/app/(frontend)/[locale]/layout.tsx`, `src/app/(frontend)/[locale]/[[...path]]/page.tsx`, `src/app/(frontend)/[locale]/not-found.tsx`, `src/components/LanguageSwitcher.tsx`

- [ ] **Step 1: Remove the template frontend**

Run: `git rm "src/app/(frontend)/layout.tsx" "src/app/(frontend)/page.tsx" "src/app/(frontend)/styles.css" src/app/my-route/route.ts`

- [ ] **Step 2: Add design tokens (Astryx used as a visual reference only)**

Create `src/app/(frontend)/styles/tokens.css`:

```css
/* Neutral system modelled on Astryx: 4px spacing grid, quiet greys, one blue accent. */
:root {
  --color-bg: #ffffff;
  --color-surface: #f5f6f8;
  --color-text: #1c1e21;
  --color-text-muted: #65676b;
  --color-border: #dadde1;
  --color-accent: #0866ff;
  --color-accent-contrast: #ffffff;

  --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans Hebrew', Arial, sans-serif;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.5rem;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --container: 1120px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #18191a;
    --color-surface: #242526;
    --color-text: #e4e6eb;
    --color-text-muted: #b0b3b8;
    --color-border: #3e4042;
    --color-accent: #4599ff;
    --color-accent-contrast: #0b0c0d;
  }
}
```

Create `src/app/(frontend)/styles/base.css`:

```css
/* Logical properties only (margin-inline, padding-block, inset-inline-start…) so RTL needs no extra CSS. */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font: var(--text-md) / 1.6 var(--font-sans);
}

img {
  max-inline-size: 100%;
  block-size: auto;
}

a {
  color: var(--color-accent);
}

a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

h1 {
  font-size: var(--text-2xl);
  line-height: 1.15;
  margin-block: 0 var(--space-4);
}

.container {
  max-inline-size: var(--container);
  margin-inline: auto;
  padding-inline: var(--space-4);
}

.site-bar {
  border-block-end: 1px solid var(--color-border);
  padding-block: var(--space-3);
}

.site-bar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.site-name {
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
}

.lang-switcher ul {
  display: flex;
  gap: var(--space-3);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: var(--text-sm);
}

.lang-switcher [aria-current] {
  font-weight: 600;
}

.page-main {
  padding-block: var(--space-12);
}
```

- [ ] **Step 3: Add the language switcher**

Create `src/components/LanguageSwitcher.tsx`:

```tsx
import { localeLabels, locales, type Locale } from '@/i18n/config'

type Props = {
  current: Locale
  hrefs: Record<Locale, string>
}

export function LanguageSwitcher({ current, hrefs }: Props) {
  return (
    <nav aria-label="Language" className="lang-switcher">
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            {locale === current ? (
              <span aria-current="true">{localeLabels[locale]}</span>
            ) : (
              <a href={hrefs[locale]} hrefLang={locale} lang={locale}>
                {localeLabels[locale]}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

- [ ] **Step 4: Add the locale root layout**

Create `src/app/(frontend)/[locale]/layout.tsx`:

```tsx
import type { ReactNode } from 'react'

import { defaultLocale, isLocale, localeDir } from '@/i18n/config'

import '../styles/tokens.css'
import '../styles/base.css'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params
  // proxy.ts only lets valid locales through; fall back defensively instead of throwing in the root layout
  const locale = isLocale(raw) ? raw : defaultLocale

  return (
    <html lang={locale} dir={localeDir(locale)}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 5: Add the page route**

Create `src/app/(frontend)/[locale]/[[...path]]/page.tsx`:

```tsx
import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath, normalizePath } from '@/i18n/paths'
import { findPublishedPageByPath, getPageAlternates } from '@/lib/queries/pages'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
}

async function resolve(params: Props['params']) {
  const { locale, path } = await params
  if (!isLocale(locale)) notFound()
  const page = await findPublishedPageByPath(normalizePath(path), locale)
  if (!page) notFound()
  return { locale, page }
}

async function getSiteName(locale: Locale): Promise<string> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return settings.siteName ?? ''
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await resolve(params)
  const siteName = await getSiteName(locale)
  return { title: siteName ? `${page.title} | ${siteName}` : page.title }
}

export default async function PageRoute({ params }: Props) {
  const { locale, page } = await resolve(params)
  const [alternates, siteName] = await Promise.all([getPageAlternates(page.id), getSiteName(locale)])

  return (
    <>
      <header className="site-bar">
        <div className="container">
          <a className="site-name" href={localizePath(locale, '/')}>
            {siteName}
          </a>
          <LanguageSwitcher current={locale} hrefs={alternates} />
        </div>
      </header>
      <main className="page-main container">
        <h1>{page.title}</h1>
      </main>
    </>
  )
}
```

- [ ] **Step 6: Add the 404 page**

Create `src/app/(frontend)/[locale]/not-found.tsx`:

```tsx
export default function NotFound() {
  return (
    <main className="page-main container">
      <h1>Page not found</h1>
      <p>
        <a href="/">Go to the home page</a>
      </p>
    </main>
  )
}
```

- [ ] **Step 7: Type-check and build**

Run: `pnpm tsc --noEmit && pnpm build`
Expected: both succeed. The build output lists `ƒ /[locale]/[[...path]]` and `ƒ Proxy (Middleware)` (or `Proxy`).

- [ ] **Step 8: Smoke-test in the dev server**

Run in the background: `pnpm dev`. Then in the admin (`http://localhost:3000/admin`, log in with the local admin from `.env` `LOCAL_ADMIN_EMAIL`/`LOCAL_ADMIN_PASSWORD`, or run `pnpm create-admin` yourself) create and publish an English page "Home", set it as Home page in Site settings, then:

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/ && curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" http://localhost:3000/en`
Expected: `200`, then `308 http://localhost:3000/`.

Stop the dev server.

- [ ] **Step 9: Commit**

```bash
git add -A "src/app/(frontend)" src/app/my-route src/components
git commit -m "Serve localized pages from a [locale] catch-all route"
```

---

### Task 8: End-to-end locale tests

**Files:**
- Create: `tests/helpers/seedPages.ts`
- Modify: `tests/e2e/frontend.e2e.spec.ts`

- [ ] **Step 1: Add a page seeding helper**

Create `tests/helpers/seedPages.ts`:

```ts
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

export const e2ePages = {
  home: { en: 'E2E Home', he: 'בית E2E' },
  about: { en: { title: 'E2E About', slug: 'e2e-about' }, he: { title: 'אודות E2E', slug: 'e2e-אודות' } },
  englishOnly: { title: 'E2E English only', slug: 'e2e-english-only' },
}

let createdIds: number[] = []
let previousHome: number | null = null

export async function seedPages(): Promise<void> {
  const payload = await getPayload({ config })
  await cleanupPages()

  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  previousHome = typeof settings.homePage === 'object' ? (settings.homePage?.id ?? null) : (settings.homePage ?? null)

  const home = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { title: e2ePages.home.en, slug: 'e2e-home', _status: 'published' },
  })
  await payload.update({
    collection: 'pages',
    id: home.id,
    locale: 'he',
    data: { title: e2ePages.home.he, slug: 'e2e-bait', _status: 'published' },
  })

  const about = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { ...e2ePages.about.en, _status: 'published' },
  })
  await payload.update({
    collection: 'pages',
    id: about.id,
    locale: 'he',
    data: { ...e2ePages.about.he, _status: 'published' },
  })

  const englishOnly = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: { ...e2ePages.englishOnly, _status: 'published' },
  })

  createdIds = [home.id, about.id, englishOnly.id]
  await payload.updateGlobal({ slug: 'site-settings', data: { homePage: home.id } })
}

export async function cleanupPages(): Promise<void> {
  const payload = await getPayload({ config })
  await payload.delete({ collection: 'pages', where: { slug: { like: 'e2e-' } }, locale: 'en' })
  if (createdIds.length) {
    await payload.delete({ collection: 'pages', where: { id: { in: createdIds } } })
    createdIds = []
  }
  if (previousHome !== null) {
    await payload.updateGlobal({ slug: 'site-settings', data: { homePage: previousHome } })
    previousHome = null
  }
}
```

- [ ] **Step 2: Replace the frontend e2e test**

Replace `tests/e2e/frontend.e2e.spec.ts`:

```ts
import { expect, test } from '@playwright/test'

import { cleanupPages, e2ePages, seedPages } from '../helpers/seedPages'

const base = 'http://localhost:3000'

test.describe('Locale routing', () => {
  test.beforeAll(async () => {
    await seedPages()
  })

  test.afterAll(async () => {
    await cleanupPages()
  })

  test('serves English at / without a prefix, left to right', async ({ page }) => {
    await page.goto(`${base}/`)
    await expect(page.locator('h1')).toHaveText(e2ePages.home.en)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr')
  })

  test('redirects /en/... to the unprefixed URL', async ({ page }) => {
    await page.goto(`${base}/en/${e2ePages.about.en.slug}`)
    await expect(page).toHaveURL(`${base}/${e2ePages.about.en.slug}`)
    await expect(page.locator('h1')).toHaveText(e2ePages.about.en.title)
  })

  test('serves Hebrew under /he with a Hebrew slug, right to left', async ({ page }) => {
    await page.goto(`${base}/he/${encodeURIComponent(e2ePages.about.he.slug)}`)
    await expect(page.locator('h1')).toHaveText(e2ePages.about.he.title)
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  })

  test('switches language to the same page', async ({ page }) => {
    await page.goto(`${base}/${e2ePages.about.en.slug}`)
    await page.getByRole('link', { name: 'עברית' }).click()
    await expect(page.locator('h1')).toHaveText(e2ePages.about.he.title)
  })

  test('switches to the Hebrew home page when the page has no Hebrew version', async ({ page }) => {
    await page.goto(`${base}/${e2ePages.englishOnly.slug}`)
    await page.getByRole('link', { name: 'עברית' }).click()
    await expect(page).toHaveURL(`${base}/he`)
    await expect(page.locator('h1')).toHaveText(e2ePages.home.he)
  })

  test('returns 404 for a page that is not published in Hebrew', async ({ page }) => {
    const response = await page.goto(`${base}/he/${e2ePages.englishOnly.slug}`)
    expect(response?.status()).toBe(404)
  })
})
```

- [ ] **Step 3: Run the e2e tests**

Run: `pnpm test:e2e`
Expected: all Locale routing tests and the existing Admin Panel tests pass. Playwright starts `pnpm dev` itself if it is not running.

- [ ] **Step 4: Commit**

```bash
git add tests/helpers/seedPages.ts tests/e2e/frontend.e2e.spec.ts
git commit -m "Test locale routing end to end"
```

---

### Task 9: Migration

**Files:**
- Create: `src/migrations/<timestamp>_phase1_foundation.ts` and `.json`
- Modify: `src/migrations/index.ts`

- [ ] **Step 1: Generate the migration**

`migrate:create` is interactive; feed it Enter key presses through a pseudo-terminal:

Run: `(while true; do printf '\r'; sleep 0.3; done) | script -q /dev/null pnpm payload migrate:create phase1_foundation`
Expected: a new `src/migrations/*_phase1_foundation.ts` and an updated `src/migrations/index.ts`.

- [ ] **Step 2: Review the SQL**

Open the new migration and check:
- `users` gets `role` as an enum column `NOT NULL DEFAULT 'editor'` (safe on an existing table because of the default).
- New tables: `pages`, `pages_locales`, `pages_breadcrumbs`, `_pages_v` and its child tables, `site_settings`, `site_settings_locales`, enums `_locales`, status enums.
- No `DROP` or `RENAME` of existing tables or columns.

If anything else appears, stop and investigate before continuing.

- [ ] **Step 3: Rehearse on a copy of the local DB**

Run:

```bash
docker exec payload-test-postgres psql -U payload -d postgres -qc "DROP DATABASE IF EXISTS rehearse" -c "CREATE DATABASE rehearse"
DATABASE_URL="$(grep ^DATABASE_URL= .env | cut -d= -f2- | sed 's#/[^/]*$#/rehearse#')" pnpm payload migrate
```

Expected: both migrations (`initial`, `phase1_foundation`) run without errors on the empty `rehearse` database (this is what production does). Then drop it: `docker exec payload-test-postgres psql -U payload -d postgres -qc "DROP DATABASE rehearse"`.

- [ ] **Step 4: Commit**

```bash
git add src/migrations
git commit -m "Add phase 1 migration"
```

---

### Task 10: Lint, full test run, deploy

- [ ] **Step 1: Lint and test**

Run: `pnpm lint && pnpm vitest run --config ./vitest.config.mts`
Expected: no lint errors; all unit and int tests pass.

- [ ] **Step 2: Deploy to production**

Production and Preview share one database and every build runs migrations, so push `main` first and wait for it:

```bash
git checkout main && git merge --ff-only develop && git push origin main && git checkout develop
```

Wait for the Production deployment to finish: `vercel ls payload-test --prod` until the newest entry shows `● Ready` (or `Error`; then read `vercel inspect <url> --logs`). Only then push the Preview branch:

```bash
git push origin develop
```

- [ ] **Step 3: Verify production**

Run:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://payload-test-sand-nu.vercel.app/admin
curl -s -o /dev/null -w "%{http_code}\n" https://payload-test-sand-nu.vercel.app/
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://payload-test-sand-nu.vercel.app/en
```

Expected: `200` for `/admin`; `404` for `/` (production has no pages yet; content arrives with the seed in phase 9); `308 https://payload-test-sand-nu.vercel.app/` for `/en`.

- [ ] **Step 4: Tell the user**

Report: what was deployed, that production has no pages yet, and that the first account created at `/admin` becomes an admin.
