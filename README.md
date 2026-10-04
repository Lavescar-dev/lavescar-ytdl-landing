# lavescar ▸ yt-dlp — landing page

Landing page for [lavescar ▸ yt-dlp](https://github.com/Lavescar-dev/lavescar-ytdl), a keyboard-first desktop frontend for yt-dlp.

- **Live:** https://yt.lavescar.com.tr
- **Product:** [lavescar-ytdl](https://github.com/Lavescar-dev/lavescar-ytdl)

A single-page site built with SvelteKit + Svelte 5, with Turkish/English copy under `src/lib/i18n`.
Deployed to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

## Development

```sh
npm ci
npm run dev       # local dev server
npm run check     # svelte-check + TypeScript
npm run build
```

## Deploy

```sh
npm run deploy    # build + wrangler pages deploy (requires a Cloudflare account)
```
