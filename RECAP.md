# Recap

## Section 3 - Lecture 16: Server-side rendering

- Server-side rendering is needed in certain situations such as for handling form submissions or for implementing API endpoints
- [Astro](https://astro.build/) defaults to `static` rendering mode
- In `astro.config.mjs` we can use the `output` property to set the rendering mode. The possible values are `static`, `server` and `hybrid`
- With `output` set to `server`, pages and endpoints will be server-rendered but we can **opt in** to static rendering for certain files
- With `output` set to `hybrid`, pages and endpoints will be statically rendered but we can **opt out** of static rendering for certain files
- Opting in or out is done by exporting a constant called `prerender` at the top of a file in the `pages` folder:

  - To opt in and statically render a page when in `server` mode

    ```js
    export const prerender = true;
    ```

    Files without the above line will be server rendered

  - To opt out and server-render a page when in `hybrid` mode
    ```js
    export const prerender = false;
    ```
    Files without the above line will be statically rendered

- For server-side rendering, Astro requires an adapter, which can be installed as an `integration`:
  - Adapters provide a server runtime that handles requests on demand
  - https://docs.astro.build/en/guides/server-side-rendering/
