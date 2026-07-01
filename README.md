# Saint John Coltrane Arts

The official website for the **Saint John Coltrane Arts Foundation**, a 501(c)(3)
charitable organization providing music education and cultural enrichment to
underserved youth in San Francisco.

Affiliated with the [Saint John Coltrane Church](https://www.coltranechurch.org/).

## Tech stack

- [Astro 4](https://astro.build/) — static-first, scrollytelling-friendly
- [Tailwind CSS](https://tailwindcss.com/) — design system
- [Lenis](https://lenis.darkroom.engineering/) — smooth inertial scroll
- [GSAP](https://gsap.com/) — available for advanced animations (installed, opt-in)
- IntersectionObserver — fade/translate reveal on scroll
- Cormorant Garamond + Inter (via Fontsource, self-hosted)

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

## Build & preview

```bash
npm run build
npm run preview
```

The static output is written to `dist/` and can be deployed to Cloudflare Pages,
Netlify, Vercel, or any static host.

## Adding image assets

See [`public/images/README.md`](./public/images/README.md) for the list of
expected filenames.

## Embedding the CBS video

Open `src/components/Gallery.astro` and replace `YOUTUBE_ID` in the iframe
`src` with the actual YouTube video ID. If left as a placeholder, the site
automatically falls back to the self-hosted MP4 in `public/video/`.

## Project structure

```
src/
  components/    # Section components (Hero, Mission, Events, Gallery, Board, Donate)
  layouts/       # Base layout with nav, footer, and global scroll setup
  pages/         # index.astro, the single-page entrypoint
  styles/        # globals.css with Tailwind + custom CSS
public/
  images/        # Image assets (drop files here)
  video/         # CBS video MP4 (already in place)
  _headers       # Cloudflare Pages HTTP headers (security + caching)
  robots.txt     # Search engine directives
```

## Deploying to Cloudflare Pages (direct upload with Wrangler)

This site deploys to the existing Cloudflare Pages project **`coltrane-arts`**
via Wrangler **direct upload**. The project is **not** connected to Git, so
pushing to GitHub does *not* deploy anything — you build locally and upload the
`dist/` folder yourself.

### One-time setup

```bash
npm install -g wrangler   # if you don't already have it
wrangler login            # authorize your Cloudflare account
```

### Deploy to production

```bash
npm run build
wrangler pages deploy dist --project-name=coltrane-arts --branch=production
```

> **The `--branch=production` flag is required.** The project's *production
> branch* is `production`. A deploy on any other branch (e.g. `main`) is
> published as a **Preview** at a `https://<hash>.coltrane-arts.pages.dev` URL
> and does **not** update the live domains.

Production serves:

- <https://coltrane-arts.pages.dev>
- <https://stjohncoltranearts.org>
- <https://stjohncoletranearts.org> (alternate spelling)

### Deploy a preview (optional)

To share a draft without touching production, deploy under any other branch name:

```bash
npm run build
wrangler pages deploy dist --project-name=coltrane-arts --branch=preview
```

Wrangler prints a unique `https://<hash>.coltrane-arts.pages.dev` URL for it.

### Custom domains

Already configured in the dashboard (**Workers & Pages → coltrane-arts →
Custom domains**). If you add a new domain, update `site:` in
`astro.config.mjs` to match and redeploy.
