import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title_fr: z.string(),
    title_en: z.string(),
    date: z.coerce.date(),
    category: z.enum(['essai', 'voyage', 'note', 'avis']),
    dek_fr: z.string().optional(),
    dek_en: z.string().optional(),
    excerpt_fr: z.string(),
    excerpt_en: z.string(),
    body_fr: z.string(),
    body_en: z.string(),
  }),
});

export const collections = { posts };
