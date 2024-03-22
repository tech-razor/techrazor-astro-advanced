import type {
  productPriceInputName,
  productTitleInputName
} from '../data/products';

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface ProductError {
  [productTitleInputName]: string;
  [productPriceInputName]: string;
}
