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

## Deploying to Cloudflare Pages (Git-based)

### One-time setup

1. **Create a GitHub repo** at <https://github.com/new>. Name it
   `coltrane-arts` (or whatever you'd like). Leave it empty, no README.

2. **Push this folder** (run from the project root):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/coltrane-arts.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages.** Go to
   <https://dash.cloudflare.com/> → **Workers & Pages** → **Create application**
   → **Pages** → **Connect to Git**, authorize GitHub, pick the repo.

4. **Build settings** (paste exactly):

   | Field                  | Value                |
   | ---------------------- | -------------------- |
   | Framework preset       | Astro                |
   | Build command          | `npm run build`      |
   | Build output directory | `dist`               |
   | Root directory         | *(leave empty)*      |

5. **Environment variables** → add one:

   - `NODE_VERSION` = `22`

6. Hit **Save and Deploy.** First build takes ~2 minutes. Your site goes live at
   `https://coltrane-arts.pages.dev` (the subdomain may vary).

### Ongoing deploys

Every `git push` to `main` triggers a new production build automatically.
Pull requests get their own preview URLs.

### Adding a custom domain later

In the Cloudflare Pages project → **Custom domains** → **Set up a custom domain**.
Follow the DNS instructions. After it's live, update `site:` in
`astro.config.mjs` to the new URL and push.
