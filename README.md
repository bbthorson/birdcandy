# Bird Candy

Marketing site for **Bird Candy** — a product strategy studio for the open
protocol shift, helping product leaders decide what to build as AI agents and
open networks rewire distribution, anchored on the
[AT Protocol](https://atproto.com).

**Live:** https://birdcandy.bbthorson.workers.dev

This repo is mostly copy. The positioning argument lives in the page content,
not in the components — if you're changing what Bird Candy claims to be, you're
editing `src/pages/`.

## Structure

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Landing page — the distribution/moat argument, what we do, why a studio, contact |
| `src/pages/work.astro` | Case studies, framed as decision / call / what it bought. Entry 01 (Antiphony) is real; 02–03 are placeholder archetypes |
| `src/pages/thesis.astro` | The long-form argument: win on functionality, not data model |
| `src/components/layout/` | `Sidebar.astro` (nav + section anchors), `Footer.astro` |
| `src/styles/global.css` | Tailwind theme tokens — type scale, rules, and the two candy accents |
| `src/layouts/BaseLayout.astro` | Shell, default `<title>`/description, fade-in observer |

Section anchors in the sidebar (`/#the-shift`, `/#capabilities`, `/#why-studio`,
`/#contact`) are root-relative so they resolve from subpages. If you rename a
section `id` on the landing page, update `Sidebar.astro` to match.

## Stack

- [Astro 7](https://astro.build) (Rust compiler, Vite 8)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) adapter
- Hosted on **Cloudflare Workers**

`@astrojs/mdx` and `@astrojs/sitemap` are installed and registered in
`astro.config.mjs`, but neither is doing anything yet: there is no `.mdx`
content, and sitemap skips every build because the config has no `site` option.
Set `site` in `astro.config.mjs` when the production domain is settled and the
sitemap will start emitting.

## Develop

Requires Node >= 22.12 (see `.nvmrc`).

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the built worker locally
```

The build writes static assets to `dist/client` and the worker entrypoint to
`dist/server`. `wrangler.jsonc` serves `./dist` via the `ASSETS` binding.

## Deploy

Pushes to `main` auto-deploy via **Cloudflare Workers Builds** (Git integration):
`npm run build` → `npx wrangler deploy`.

To deploy manually:

```sh
npm run build
npx wrangler deploy
```

## Contact

Bird Candy takes conversations over AT Protocol — message
[@birdcandy.com](https://bsky.app/profile/birdcandy.com) on Bluesky
(DMs are end-to-end encrypted via [Germ](https://www.germnetwork.com/)).
