# Recap

## Section 3 - Lecture 21: View transitions

- View transitions is an experimental browser technology available in Chrome, Edge and Opera as of March 2023. It allows animated transitions between page routes in a single-page app (SPA).
- In [Astro](https://astro.build/) view transitions can easily be enabled just by adding the special `<ViewTransitions />` component to the `<head>` section of a page.
- Enabling view transitions in Astro turns a multi-page app (MPA) into a single-page app (SPA). Astro no longer performs full page loads and all routing is done client-side.
- By default, Astro uses a `fade` effect to transition between page routes
- We can opt out of view transitions by adding the attribute `data-astro-reload` to an anchor tag that links to the page route for which we want to opt out of view transitions. In the example below, instead of using view transitions, Astro will perform a full page load when rendering the `/articles/1-go-programming` page:

  ```html
  <a href="/articles/1-go-programming" data-astro-reload>Go Programming</a>
  ```

- We can use the `transition:animate` attribute on an element to specify which animation effect to use:

  ```xml
  <div class="container" transition:animate="slide">
    ...
  </div>
  ```

- To trigger view transitions programmatically, we can import the `navigate` function from `astro:transitions/client` and use it to navigate to a specified page route:

  ```html
  <script>
    import { navigate } from 'astro:transitions/client';

    document
      .querySelector('button')
      ?.addEventListener('click', () => navigate('/collections'));
  </script>
  ```

- When a view transition happens, everything inside the `<body>` element is replaced. If we want to prevent certain components or HTML elements from being replaced, we can use the `transition:persist` attribute on the component or HTML element:

  ```xml
  <ReactCounter client:load transition:persist />
  ```

  ```xml
  <button transition:persist>Click me</button>
  ```

- View transitions have a lifecycle. There are three phases in the lifecycle:

  - Preparation: Content for the next page route is loaded
  - DOM swap: The old DOM is replaced with a new DOM that represents the content for the next page route
  - Completion: The new DOM content is fully loaded and any scripts finish executing

- Astro provides lifecycle events for the above phases. We can hook into these events to perform certain tasks such as displaying a loading indicator or attaching event listeners. The lifecycle events run in the following order:

  - astro:before-preparation
  - astro:after-preparation
  - astro:before-swap
  - astro:after-swap
  - astro:page-load

- To make `inline` scripts re-run after every transition, we can use the `data-astro-rerun` attribute on the `<script>` tag:

  ```js
  <script is:inline data-astro-rerun>
    ...
  </script>
  ```

- For more information: https://docs.astro.build/en/guides/view-transitions/
