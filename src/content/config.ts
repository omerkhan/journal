import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    // Accept both formats: simple string OR media object (for backwards compat)
    image: z.string().optional().nullable(),
    media: z.object({
      url: z.string(),
      type: z.enum(['image', 'video']),
      alt: z.string(),
    }).optional().nullable(),
    location: z.string().optional().nullable(),
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
