# Recap

## Section 3 - Lecture 19: Middleware

- In a request-response cycle, a client makes a request to a server resource and the server responds
- Middleware is code that sits between the client and the requested server resource
- Middleware runs on the server but can process requests before the request reaches the server resource
- We can have multiple middleware functions and they run in order one after the other, firstly from client to server when a request has been made and then from server to client when a response has been generated
- In [Astro](https://astro.build/), the middleware function can return a response by itself or it can go `return next()` or `await next()` and the request will then continue on to the next middleware function or the request will reach the final destination
- If the middleware function is not interested in the response that comes back from the server, it simply uses `return next()`
- If the middleware function wants to process the response that comes back from the server, it uses `const response = await next()` and can then work with the `response` object before returning it to the client
- To implement middleware in Astro, we need a file called `middleware.js` or `middleware.ts` at the root of the `src` folder. Alternately, we can create a folder called `middleware` with an index file inside. We then need to export a function called `onRequest`.
- For TypeScript types, we can surround the middleware function definition with the `defineMiddleware()` function
- If using `JSDoc`, we can add a comment to the middleware function definition like so:

  ```js
  /**
   * @type {import("astro").MiddlewareHandler}
   */
  ```

- We can use Astro's `sequence` function to specify the order in which to run multiple middleware functions:

  ```js
  import { sequence } from 'astro:middleware';

  export const onRequest = sequence(
    addCspResponseHeader,
    validateNewProductFormData
  );
  ```

- For more information: https://docs.astro.build/en/guides/middleware/
