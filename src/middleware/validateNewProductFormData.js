import {
  productPriceInputName,
  productTitleInputName,
  validateNewProductInput
} from '../data/products';

/**
 * @type {import("astro").MiddlewareHandler}
 */
export const validateNewProductFormData = async ({ request }, next) => {
  if (request.url.endsWith('/api/products') && request.method === 'POST') {
    const clonedRequest = request.clone();

    const data = await clonedRequest.formData();
    const productTitle = data.get(productTitleInputName);
    const productPrice = data.get(productPriceInputName);

    const errors = validateNewProductInput(productTitle, productPrice);

    const hasErrors =
      errors[productTitleInputName] || errors[productPriceInputName];

    if (hasErrors) {
      return new Response(JSON.stringify({ errors }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }

  return next();
};
