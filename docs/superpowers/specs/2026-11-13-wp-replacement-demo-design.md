# WP replacement demo: design

Date: 2026-11-13
Status: approved in brainstorming, waiting for spec review

## Goal

The agency runs many client sites on WordPress with Elementor or Gutenberg, JetEngine, WPML, Yoast/RankMath, ACF and HubSpot forms. Elementor is liked by clients but buggy; Gutenberg is stable but hard for clients. We are evaluating whether Payload CMS can replace this stack.

Two deliverables:

1. **Comparison page** `docs/wp-vs-payload.html` (also published as a private artifact link). Done in draft; kept up to date as the demo proves or disproves rows.
2. **Demo website** in this repo, deployed to the existing Vercel project. No visual design: plain CSS modelled on the Astryx design system as a reference only (Astryx is not installed). The real projects will have their own designs.

The demo is also the first version of a **starter kit**: one base repo copied per client, each with its own database and deploy.

## Out of scope

- AI features (only described in the comparison).
- WP content migration.
- Multi-tenant setup.
- Payload's form builder (HubSpot embed only).
- Front-end user accounts and front-end submissions.

## Decisions

| Topic | Decision |
|---|---|
| Page building | Approach A: ready-made section blocks + a few flexible layout blocks + Listing block + reusable sections. A/B/C stays an open "needs decision" in the comparison. |
| Editing UX | Live preview beside the form (built in). No on-canvas editing. |
| Languages | EN (default) + HE (RTL). |
| URLs | English has no prefix (`/about`), Hebrew is `/he/about`. |
| Hosting | Existing Vercel project + Neon + Vercel Blob. Comparison marks hosting "to be reviewed by the backend team". |
| Roles | Admin and Editor. |

## 1. Languages and routing

- Payload `localization`: locales `en` (default) and `he` (`rtl: true`), `fallback: false` for content shown on the site so a missing Hebrew version is not silently shown in English.
- Translatable fields are marked `localized: true`. The page `layout` (blocks) is localized as a whole, so each language has its own block list: same blocks translated (via built-in **Copy to locale**) or a different layout.
- Per-language publish status with `localizeStatus` (experimental in Payload 3.93; the demo verifies it).
- Slugs are localized on Pages, CPT items and taxonomy terms. Non-Latin slugs (Hebrew) are allowed.
- CPT and taxonomy base paths per language live in **Site settings** (for example `blog` / `בלוג`).
- Routing (Next.js App Router): an optional locale segment resolved in `proxy.ts`. A request without a known locale prefix is English; `/he/...` is Hebrew. One catch-all route resolves the path to a Page, a CPT archive/item, or a term archive.
- `<html lang dir>` set per locale. All CSS uses logical properties.
- Language switcher goes to the same document's URL in the other language; if that version is not published, to that language's home page.
- `hreflang` alternates in `<head>` and in the sitemap.

## 2. Content model

### Pages

- Fields: title, slug, parent (nested docs plugin, full path and breadcrumbs), template, layout (blocks), Page appearance, SEO tab.
- Versions with drafts, autosave, scheduled publish.

### CPTs

| CPT | Taxonomies | Relations | Filter variations shown |
|---|---|---|---|
| Blog posts | Categories (hierarchical), Tags | Author → People | Category tabs, tag, author, newest/oldest, search, pagination |
| Events | Event types | Speakers → People | Upcoming/past, date range, type, load more |
| Resources | Industries, Resource types, Topics | Related resources | Faceted checkboxes on 3 taxonomies, shareable URL |
| Glossary | none | Related terms | A–Z letter bar, alphabetical sort, search |
| People | Departments | Join fields: their posts and events | Department tabs, A–Z by name |

- Each CPT item: title, slug, excerpt, featured image, its own fields, a block area, Page appearance, SEO tab.
- Each taxonomy is its own collection (title, slug, description, optional parent), grouped under "Taxonomies" in the admin.
- Reverse relations use Payload `join` fields.

### Other collections

- **Headers** and **Footers** (several designs each).
- **Reusable sections**: a block list referenced from pages.
- **Redirects** (official plugin).
- **Media** (existing), **Users** (existing, plus `role`).

### Globals

- **Site settings**: logo, default header and footer, social links, default SEO, title pattern per language, CPT and taxonomy base paths per language, HubSpot portal ID and tracking toggle.
- **CPT defaults**: per-CPT default blocks shown on every single item (for example a CTA after every blog post).

### Page appearance (Pages and CPT items)

- Header: Default / pick another / None.
- Footer: Default / pick another / None.

## 3. Blocks

- **Sections (ready-made):** Hero, Cards, Tabs, Stats, Logos, CTA, Testimonials, FAQ, Media + text, Rich text.
- **Layout (flexible):** Columns (1–4 columns, each with simple blocks: rich text, image, button group).
- **Dynamic:** Listing, Dynamic field (shows a field of the current item, like JetEngine dynamic tags), HubSpot form, Reusable section (reference).
- Each block has a few style options (background, spacing, alignment) and a **Visibility** tab.
- Each block is one folder: Payload config + React server component (+ client component only when interactive), registered in one block registry.
- Page templates (Blank, Landing, About, Contact, Archive) pre-fill the layout when a new page is created (`beforeChange` on create when layout is empty).
- Duplicate document and block copy/paste are Payload built-ins.

## 4. Listing block and filters

Settings:

- **Query:** CPT, fixed filters (terms, upcoming/past, related to current item), exclude current item, limit.
- **Visitor filters (each on or off):** per-taxonomy filter as tabs, select or checkboxes; author/person; date (upcoming/past or range); keyword search; A–Z letter bar (Hebrew alphabet on Hebrew pages, empty letters disabled); sort (newest, oldest, A–Z, Z–A, recently updated).
- **Display:** card style (standard, horizontal, compact, person, event), layout (grid 2/3/4, list, slider), paging (numbers, load more, none).

Behaviour:

- Filter state lives in the URL query (`?industry=retail&type=guide&page=2`). Shareable, back button works.
- First load is server rendered from the URL (works without JS, indexable). Changing a filter updates the URL and re-renders without a full reload.
- Result count, empty state with "Clear filters".
- When several Listing blocks are on one page, query params are prefixed by the block's id.
- The query builder is one pure function: settings + URL params + locale → Payload `where`, `sort`, `page`. Unit-tested.
- CPT archive pages are normal Pages with a Listing block. Term archives (`/blog/category/news`) reuse the CPT's archive page with the term preset.

## 5. Menus, headers and footers

Header document:

- Logo variant, CTA button, language switcher on/off.
- Menu (localized, so each language has its own tree). Item types:
  - **Link:** internal reference (page or CPT item) or custom URL, new tab option.
  - **Dropdown:** list of links.
  - **Mega menu:** 1–4 columns (heading + links with label, description, icon), optional promo card (image, title, text, button), optional auto column ("latest N from CPT/term"), optional bottom bar link.
- Internal links store the reference and resolve the URL at render, so renames do not break menus.
- Mobile: accordion. Keyboard accessible, RTL mirrored.

Footer document: columns of links, text, social links, legal line.

## 6. Visibility conditions

- Every block has a Visibility tab: a list of conditions and a match mode (all / any).
- Conditions in the demo: device (desktop/tablet/mobile), date window, field of the current item (is set / is empty / equals / date in future), URL parameter, listing has no results.
- **Registry:** each condition is `{ slug, label, fields, evaluate(context) }`. Adding a condition means adding one file. The admin select and settings fields come from the registry.
- Evaluated on the server; hidden blocks are not in the HTML. Device uses CSS classes so cached pages stay correct.
- Pages with an active date window get a revalidate time matching the next window change.

## 7. SEO

- Official SEO plugin on Pages, CPT items and terms: meta title, description, OG image, snippet preview. Extra fields: noindex, canonical.
- OG image fallback: SEO image → featured image → site default.
- `sitemap.ts` (both languages, hreflang alternates, excludes noindex), `robots.ts`.
- JSON-LD: Organization (site), Article (posts), Event (events), BreadcrumbList.
- Official redirects plugin; a hook creates a 301 when a published document's slug changes. The front end checks redirects before 404.
- Title pattern per language from Site settings.

## 8. HubSpot

- HubSpot form block: form ID (localized), heading, text, style variant, display inline or as a popup opened by a button. Portal ID from Site settings.
- Tracking script loaded when enabled in Site settings.

## 9. Workflow and roles

- Drafts, autosave, live preview (desktop/tablet/mobile) on Pages, CPT items, Headers, Footers, Reusable sections.
- Shareable preview link: signed, expiring token in the URL enables draft mode for that document.
- Scheduled publish and unpublish through Payload jobs; a Vercel cron calls the jobs endpoint.
- Revisions with diff and restore (built in). Document locking (built in).
- Roles: `admin` (everything) and `editor` (all content including publish; no Users, Site settings, Redirects).

## 10. Rendering and caching

- Server components fetch through the Payload Local API.
- Published pages are cached; `afterChange` / `afterDelete` hooks revalidate the affected paths and tags (the document, its archives, menus that reference it).
- Draft mode bypasses the cache for preview.

## 11. Styling

- One CSS tokens file modelled on Astryx (color, spacing, radius, type scale), plain CSS modules per block.
- Logical properties only, so RTL works without separate stylesheets.

## 12. Seed data

- `pnpm seed` script, safe to re-run on the local DB (local resets are allowed; production is seeded only through an explicit, one-time build step with approval).
- EN + HE content: about 10 items per CPT, terms, people, 3 headers (Main with mega menus, Minimal, Transparent), 2 footers, reusable sections, templates, one demo page per filter variation, a home page. Some items exist only in English on purpose.

## 13. Testing

- Vitest integration tests: path resolution per locale, Listing query builder, each visibility condition, auto redirect on slug change, role access.
- Playwright: EN and HE navigation and language switcher, filters update the URL and results, mega menu opens, admin duplicates a page and pastes a block.

## 14. Delivery phases

Each phase ends deployable (migration reviewed, tests green, pushed to `main` then `develop`).

1. Foundation: localization, routing, Site settings, roles, styling tokens.
2. Content model: CPTs, taxonomies, relations, Page appearance.
3. Blocks, templates, reusable sections, CPT defaults.
4. Listing block and filters.
5. Headers, footers, mega menu.
6. Visibility conditions.
7. SEO, redirects, sitemap, HubSpot.
8. Workflow: scheduling cron, preview links.
9. Seed data and demo pages.
10. Update the comparison page with what the demo proved and add demo links.

## Risks

- `localizeStatus` is experimental. Fallback if it fails: a per-locale "published" checkbox enforced in front-end queries.
- Localized block layouts can make the database large; acceptable for the demo, noted in the comparison.
- Payload upgrades are a developer task and can include migrations.
