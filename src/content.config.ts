import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live as MDX for now. When we move publishing to Leaflet, this loader
// is the only thing that changes — swap `glob` for a fetch against the
// pub.leaflet.* records and every consumer below keeps working.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    // Which of the three vantage points this piece is written from.
    audience: z.enum(['Incumbents', 'Challengers', 'Upstarts']),
    date: z.coerce.date(),
    // Drafts are excluded from the index, the sitemap, and search engines.
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { writing };
