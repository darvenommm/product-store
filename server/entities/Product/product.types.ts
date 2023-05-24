import type { Product } from './product.model.ts';

export type ProductInstance = Product;

export interface IProductDataFromClient {
  title: string;
  description: string;
  price: number;
}

export interface IProductDataForCreating extends IProductDataFromClient {
  photoUrl: string;
}
