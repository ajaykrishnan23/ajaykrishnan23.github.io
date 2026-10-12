import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(), // optional short summary shown under the title
    date: z.coerce.date(),
    tag: z.enum(['technical', 'not-so-technical']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
