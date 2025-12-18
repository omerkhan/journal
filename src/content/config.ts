import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    media: z.object({
      url: z.string(),
      type: z.enum(['image', 'video']),
      alt: z.string(),
    }).optional(),
    location: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts,
  pages,
};
