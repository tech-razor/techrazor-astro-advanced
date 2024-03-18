export const prerender = false;

import type { APIContext, APIRoute } from 'astro';
import { getProductById } from '../../../data/products';

export const GET: APIRoute = ({ params }: APIContext) => {
  const id = Number(params.id);
  const product = getProductById(id);

  if (product) {
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return new Response(null, {
    status: 404,
    statusText: 'Not found'
  });
};
