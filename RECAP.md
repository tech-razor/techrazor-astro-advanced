# Recap

## Section 3 - Lecture 18: Form submissions

- For `<form>` elements that do not have an `action` attribute, form data is submitted back to the same page. We can handle form submissions within the script/code-fence section of the Astro page component.
- Depending on the rendering mode, we will need to opt in or opt out of static rendering
- The `Astro` global object provides access to the standard `request` object. For example, to check which HTTP method the `request` is using, we can access `Astro.request.method`.
