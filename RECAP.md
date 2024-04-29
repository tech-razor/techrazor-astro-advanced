# Recap

## Section 3 - Lecture 20: HTML streaming

- [Astro](https://astro.build/) delivers rendered components to the web browser as soon as they are ready, so some parts of the web page will be displayed faster than other parts
- Fetching data at the page level can block rendering as nothing can be rendered until the data request is completed
- To take advantage of HTML streaming, we should move slow code from the page component into components that only represent a part of a web page. This will allow Astro to deliver content to the browser as soon as different parts of the requested web page are ready. A user will be able to interact with the rendered areas of the web page without having to wait for the entire page to render.
