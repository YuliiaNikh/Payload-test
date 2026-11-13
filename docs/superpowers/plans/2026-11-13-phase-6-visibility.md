# Phase 6: Visibility Conditions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** A Visibility tab on every section block (JetEngine dynamic visibility): a list of conditions matched with all/any. Built-in conditions: device, date window, field of the current item, URL parameter, "content type has items". New conditions are one file in a registry.

**Architecture:**
- `src/visibility/types.ts` defines `VisibilityCondition { slug, label, fields, evaluate?, classes? }`. Each condition lives in `src/visibility/conditions/<slug>.ts`; `registry.ts` lists them. The admin field is generated from the registry (a `type` select + each condition's fields shown only for its type, names prefixed by the slug so rows never clash).
- `evaluateVisibility(visibility, ctx)` runs server-side; hidden blocks are not in the HTML. Device conditions return CSS classes instead (so a cached page stays right on every device); they always apply on top of the server decision.
- Pages render on request (no full-page cache yet), so date windows switch on time without extra revalidation; if caching is added later, pages with date windows need `revalidate` at the next boundary (noted in the comparison doc).

## Tasks
- [ ] 1. Types, registry, the five conditions, `visibilityField()`; add the tab to `sectionBlock`.
- [ ] 2. Unit tests per condition and for all/any matching and device classes.
- [ ] 3. RenderBlocks evaluates visibility and wraps device classes; CSS for device classes.
- [ ] 4. Int test for "has items"; e2e: URL-param section appears only with `?campaign=…`; future date window hidden; field condition on an event.
- [ ] 5. Migration, lint, tests, deploy.
