export const prerender = false;

import type { APIContext, APIRoute } from 'astro';
import products from '../../../data/products.json';

export const GET: APIRoute = ({ params }: APIContext) => {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

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
