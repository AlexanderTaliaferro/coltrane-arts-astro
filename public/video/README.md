# Video Assets

Video files in this folder are **gitignored** because Cloudflare Pages has a
25 MiB per-file limit and most video files exceed that.

## Production strategy

Use the YouTube embed in `src/components/Gallery.astro`. Replace `YOUTUBE_ID`
in the iframe `src` with the real video ID and you're done.

## Local development fallback

If you keep `CBSJohnColtraneChurch.mp4` in this folder locally, the site will
fall back to a self-hosted player during dev when the YouTube ID is still a
placeholder. It just won't ship to production.

## If you need to host the video yourself in production

Three options:

1. **Cloudflare Stream** — built for this, adaptive bitrate, ~$5/month
2. **Cloudflare R2** — object storage, cheap, serve via a custom domain
3. **YouTube/Vimeo unlisted upload** — free, no infra
