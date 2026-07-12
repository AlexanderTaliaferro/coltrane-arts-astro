# Change history

Newest entries at the top. See [CLAUDE.md](CLAUDE.md) for the entry template and logging policy.

## 2026-07-12 12:49
**Files:** package.json, package-lock.json
**Change:** Pinned `@astrojs/sitemap` to exactly `3.6.0` to fix a build crash (`Cannot read properties of undefined (reading 'reduce')`). Versions 3.7.0+ and the 3.6.1 patch use the Astro 5-only `astro:routes:resolved` hook, which never fires on this project's Astro 4, leaving `_routes` undefined. 3.6.0 is the last version compatible with Astro 4.
**Verify:** Run `npm run build` — it should complete with `[@astrojs/sitemap] sitemap-index.xml created at dist` and no reduce error.

## 2026-06-30 (4)
**Files:** src/components/Board.astro
**Change:** Added mx-auto to the board grid so the two-member layout centers within the section instead of left-aligning.
**Verify:** Run `npm run dev`, scroll to Board section — the two cards should be centered on the page.

## 2026-06-30 (3)
**Files:** src/components/Gallery.astro
**Change:** Fixed gallery scroll on narrow screens. Sticky slideshow column is now desktop-only (hidden on mobile). Each provenance step now shows its image inline above the text on mobile, with the caption below it. min-h-[55vh] and space-y-32 gaps are also desktop-only.
**Verify:** Run `npm run dev`, narrow the browser below 1024px — each gallery step should show its image above the text. On wide screens the original sticky cross-fade behavior should be unchanged.

## 2026-06-30 (2)
**Files:** src/data/events.ts
**Change:** Updated City Lights event video poster from coltrane-1972.jpg to cityLights.jpg.
**Verify:** Run `npm run dev`, go to /past-events — the City Lights event video thumbnail should show the City Lights image before clicking play.

## 2026-06-30 (1)
**Files:** src/components/Gallery.astro
**Change:** Added new first gallery slide using coltrane-portrait.jpg with imagePrint caption and charcoal-on-museum-board right-side text. Removed "Held in trust by the Church" slide (1972–2024). Gallery now opens with the artwork itself before the provenance timeline.
**Verify:** Run `npm run dev`, scroll to Gallery section — first image should be the portrait, caption should read the imagePrint details, right column heading "'Coltrane'" with year "1972 · 2024" in gold.

## 2026-06-30 00:00
**Files:** .claude/CLAUDE.md, .claude/history.md
**Change:** Created the .claude folder with project instructions and this change log, per request, to give better visibility into edits after recent changes were unexpectedly undone.
**Verify:** Confirm both files exist at .claude/CLAUDE.md and .claude/history.md and read correctly.
