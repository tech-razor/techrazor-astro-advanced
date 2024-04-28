# Recap

## Section 3 - Lecture 14: Content collections

- [Content collections](https://docs.astro.build/en/guides/content-collections/) are a feature unique to [Astro](https://astro.build/)
- Content collections go inside the special `content` folder under the `src` folder
- Content collections are a collection of files. The name of the sub folder inside the `content` folder is the name of the `collection` and the files in the collection are called `entries`.
- Although we can just put content inside the `pages` folder, the benefit of content collections is that entries can be validated against a `schema`. Collections can also be queried like a database and so entries can be retrieved selectively
- There are two types of collections: `content` and `data`
- Collections of type `content` contain `.md` or `.mdx` file entries
- Collections of type `data` contain `YAML` or `JSON` file entries
- Schema validation allows us to ensure that the `frontmatter` section in Markdown files or the structure of `YAML` or `JSON` files are valid and consistent
- Collections are defined in a file called `config.ts`. Although this is optional, defining collections with a schema allows us to validate collection entries
- Schema declaration and validation is done with the [Zod](https://zod.dev/) library
- Collection entries can be retrieved with the `getCollection()` function:

  ```js
  const books = await getCollection('books');
  ```

  The `getCollection()` function also accepts an optional second parameter, which is a predicate function. We can use this to selectively retrieve collection entries:

  ```js
  const filteredBooks = await getCollection(
    'books',
    ({ data }) => data.pages > 400
  );
  ```

- Pagination of static content can be done with the `paginate` function available to `getStaticPaths()`:
  - The `paginate` function expects a dynamic page route file called `[page].astro` or `[...page].astro`
  - The `paginate` function will generate the array that we need to return from `getStaticPaths()`
  - A `page` prop is also made available for the frontend
  - https://docs.astro.build/en/reference/api-reference/#paginate
  - https://docs.astro.build/en/guides/routing/#pagination
