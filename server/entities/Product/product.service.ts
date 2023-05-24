import { Products } from '#db';

import type {
  ProductInstance,
  IProductDataForCreating,
} from './product.types.ts';

class ProductService {
  public getAllProducts = async (): Promise<ProductInstance[]> => {
    return await Products.findAll();
  };

  public createProduct = async (
    productData: IProductDataForCreating,
  ): Promise<ProductInstance> => {
    return await Products.create(productData);
  };
}

export const productService = new ProductService();
