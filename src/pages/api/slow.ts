export const prerender = false;

import type { APIRoute } from 'astro';

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const GET: APIRoute = async () => {
  await sleep(3000);

  return new Response(JSON.stringify({ message: 'I am a delayed response' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
