import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext, APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }: APIContext) => {
  const articles = await getCollection('articles');

  return rss({
    title: 'Articles',
    description: 'Technical articles on programming',
    site: site || 'https://example.com/',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/collections/articles/${article.slug}`
    }))
  });
};
