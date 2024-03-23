import { sequence } from 'astro:middleware';
import { addCspResponseHeader } from './addCspResponseHeader';
import { validateNewProductFormData } from './validateNewProductFormData';

export const onRequest = sequence(
  addCspResponseHeader,
  validateNewProductFormData
);
