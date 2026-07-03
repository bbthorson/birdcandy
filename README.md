# Bird Candy

Marketing site for **Bird Candy** — a strategy studio helping companies navigate
the shift from proprietary platforms to open protocols, anchored on the
[AT Protocol](https://atproto.com).

**Live:** https://birdcandy.bbthorson.workers.dev

## Stack

- [Astro 7](https://astro.build) (Rust compiler, Vite 8)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) adapter, MDX + sitemap integrations
- Hosted on **Cloudflare Workers**

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the build locally
```

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
