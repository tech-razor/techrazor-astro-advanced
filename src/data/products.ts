import type { Product } from '../models/product';
import products from './products.json';

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);
