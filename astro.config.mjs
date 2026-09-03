// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import fs from 'node:fs';
import path from 'node:path';

// Draft posts still build (so they're shareable by URL and carry a noindex
// meta tag) but they must stay out of the sitemap.
const draftPaths = fs
  .readdirSync('./src/content/writing')
  .filter((f) => /\.mdx?$/.test(f))
  .filter((f) =>
    /^draft:\s*true\s*$/m.test(
      fs.readFileSync(path.join('./src/content/writing', f), 'utf8'),
    ),
  )
  .map((f) => `/writing/${f.replace(/\.mdx?$/, '')}/`);

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !draftPaths.some((p) => new URL(page).pathname === p),
    }),
  ]
});