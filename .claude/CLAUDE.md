# Project instructions for Claude

This is the St. John Coltrane Arts website — an Astro site (TypeScript, Tailwind) deployed via Wrangler/Cloudflare.

## Best practices

- Read the relevant component/page fully before editing it. Don't guess at structure from filenames.
- Make the smallest change that satisfies the request. Don't refactor, rename, or restructure unrelated code in the same edit.
- Preserve existing formatting, class names, and content conventions already used in the file you're editing.
- Don't undo or simplify prior intentional changes you don't understand — if something looks like a deliberate past decision (e.g. specific copy, a specific layout choice), ask before reverting it.
- Run `npm run build` (or the project's build/dev command) after non-trivial changes to confirm the site still builds before reporting done.
- Never commit or push without being explicitly asked.

## Change log requirement

After **every code change** (not just at the end of a session), append an entry to [history.md](history.md) in this folder. Use this template:

```markdown
## YYYY-MM-DD HH:MM
**Files:** path/one.astro, path/two.ts
**Change:** One or two sentences describing what changed and why.
**Verify:** How to confirm it worked (e.g. "run `npm run dev`, check the Events section renders the new date").
```

- Add the newest entry at the **top** of `history.md`, just under the title.
- Keep entries factual and specific — name the actual files touched, not "various files."
- This log exists so we can trace what changed and why across sessions, since past changes have been unintentionally undone before.

## In-chat reporting requirement

After making any code change, always reply in chat with three parts:

1. **Summary** — what changed, in plain language.
2. **How to verify** — concrete steps to confirm it works (command to run, page/section to check, what it should look like).
3. **Action items** — anything the user needs to do themselves (e.g. review content, approve a design choice, deploy, update an env var). If there are none, say "None."
