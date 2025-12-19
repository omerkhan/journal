import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional().nullable(),
    location: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts,
  pages,
};
