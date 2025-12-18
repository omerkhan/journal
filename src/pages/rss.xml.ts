import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const getSlug = (id: string) => id.replace(/\.md$/, '');

  return rss({
    title: 'Omer Khan',
    description: 'A personal micro-journaling website',
    site: context.site || 'https://omerkhan.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title || post.data.date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      pubDate: post.data.date,
      description: post.body?.slice(0, 200) + '...',
      link: `/posts/${getSlug(post.id)}/`,
    })),
  });
}
