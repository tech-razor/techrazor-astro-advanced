# Recap

## Section 3 - Lecture 18: Form submissions

- For `<form>` elements that do not have an `action` attribute, form data is **submitted back to the same page**. We can handle form submissions within the script/code-fence section of the Astro page component.
- Depending on the rendering mode, the Astro page component will need to opt in or opt out of static rendering by exporting the `prerender` constant and setting it to `true` or `false`
- The `Astro` global object provides access to the standard `request` object. For example, to check which HTTP method the `request` is using, we can access `Astro.request.method`.
- When **submitting to an API endpoint**, we can handle form submissions by attaching an `onsubmit` event handler from within a `<script>` tag in the page component or we can create an island component to render a form and handle form submission.
