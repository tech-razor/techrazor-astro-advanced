import { z, defineCollection } from 'astro:content';

const booksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pages: z.number()
  })
});

export const collections = {
  books: booksCollection
};
