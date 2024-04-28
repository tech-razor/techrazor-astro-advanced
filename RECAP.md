# Recap

## Section 3 - Lecture 15: More on page layouts

- Layout components can be nested inside other layout components
- A layout component can have more than one `<slot />` element
- The `<slot />` element has an optional `name` attribute that we can use to give it a name:

  ```xml
  <slot name="left-column" />
  ```

- A `<slot />` element without a name is the `default` slot
- To assign content to a named slot we can specify the slot's name using the `slot` attribute on an element:

  ```xml
  <div slot="left-column">
    ...
  </div>
  ```
