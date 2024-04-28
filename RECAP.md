# Recap

## Section 3 - Lecture 17: Endpoints

- Using server-side rendering means we can do things like creating a live API endpoints that listens for requests
- Just like regular pages, files for endpoints also go into the `pages` folder and follow the same routing principles. However, the endpoint files are not Astro page components, so they should be `.js` or `.ts` files, not `.astro` files
- For a live `API endpoint` that listens for requests, depending on the rendering mode, either opt in or opt out of static rendering by exporting the `prerender` constant and setting it to `true` or `false`
- In the endpoint file, we have to export a function named after a HTTP method and specified in all-caps:

  ```js
  export const GET = () => {};
  ```

  The endpoint file can contain multiple handler functions within the same file, named after different HTTP methods

- To download files, we can create a `static-file endpoint`. Such endpoints are `.js` or `.ts` files that are named after the file to download. For example, an endpoint file called `products.json.ts` will let a user download a file called `products.json`
- To create an RSS feed, we need to install Astro's official RSS helper package:

  ```shell
  npm install @astrojs/rss
  ```

  We then need to create a static-file endpoint that generates the required XML for the RSS feed
