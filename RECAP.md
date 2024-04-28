# Recap

## Section 3 - Lecture 13: Images

- [Astro](https://astro.build/) provides an `<Image />` component that optimises images. It generates an `<img>` tag and enables lazy `loading` and async `decoding` by default:
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding
- Astro also provides a `<Picture />` component that can generate images in different dimensions and file formats:
  - https://docs.astro.build/en/guides/images/#picture-
- If we want to read images without generating an `<img>` tag, Astro provides a `getImage()` function that can be used in the code-fence section. This function cannot be used client-side:
  - https://docs.astro.build/en/guides/images/#generating-images-with-getimage
