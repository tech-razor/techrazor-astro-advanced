import { defineMiddleware } from 'astro:middleware';

export const addCspResponseHeader = defineMiddleware(async (_, next) => {
  const response = await next();
  response.headers.append('Content-Security-Policy', 'img-src *');
  return response;
});
