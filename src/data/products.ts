import type { Product, ProductError } from '../models/product';
import products from './products.json';

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const productIdInputName = 'product-id';
export const productTitleInputName = 'product-title';
export const productPriceInputName = 'product-price';

export const productTitleMinLength = 1;
export const productTitleMaxLength = 30;

export const validateNewProductInput = (
  productTitle: string,
  productPrice: string
): ProductError => {
  const errors = {
    [productTitleInputName]: '',
    [productPriceInputName]: ''
  };

  if (
    typeof productTitle !== 'string' ||
    productTitle.length < productTitleMinLength ||
    productTitle.length > productTitleMaxLength
  ) {
    errors[productTitleInputName] =
      `The product title must be between ${productTitleMinLength} and ${productTitleMaxLength} characters`;
  }

  if (Number.isNaN(Number(productPrice)) || Number(productPrice) === 0) {
    errors[productPriceInputName] =
      'The product price must be a number greater than zero';
  }

  return errors;
};
