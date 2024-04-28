# Recap

## Section 3 - Lecture 11: More on CSS

- Apart from using the `<style>` tag inside `.astro` files, CSS can be applied in the usual way by importing CSS files
- In [Astro](https://astro.build/), CSS classes can be added conditionally with the `class:list` template directive.
- In the example below, the `active` class will be applied to the anchor tag only if the condition `url === activeOptionUrl` evaluates to `true`:

  ```js
  <a
    class:list={['menu-item', { active: url === activeOptionUrl }]}
    href={`/${url}`}>
    {label}
  </a>
  ```

- Astro uses [Vite](https://vitejs.dev/guide/build.html) for bundling. Vite can be configured in the `astro.config.mjs` file. Here is an example:

  ```js
  export default defineConfig({
    vite: {
      build: {
        target: ['es2018', 'edge42', 'firefox58', 'chrome64', 'safari11']
      }
    }
  });
  ```

- For more information about Vite configuration see https://vitejs.dev/guide/build.html
- Vite itself uses [esbuild](https://esbuild.github.io/) and here is more information about configuration and about which features are supported by which build targets: https://esbuild.github.io/content-types/#javascript
- To use CSS preprocessors like `SASS` or `LESS`, simply install the required `npm` package and then create stylesheets with the correct file extension or use the `lang` attribute in the `<style>` tag:

  ```console
  npm install sass
  ```

  ```html
  <style lang="sass">
    body {
      line-height: 1.5;
    }
  </style>
  ```

- To use a CSS framework such as `Tailwind`, we would install it as an integration, similar to how we installed React and Vue:

  ```console
  npx astro add tailwind
  ```

  CSS utility classes from `Tailwind` will then be available to use in our markup

- To access variables from the code-fence section inside a `<style>` tag or `<script>` tag, we use the `define:vars` template directive:

  ```js
  <style define:vars={{ activeBackgroundColor }}>
    body {
      background-color: var(--activeBackgroundColor);
    }
  </style>
  ```
