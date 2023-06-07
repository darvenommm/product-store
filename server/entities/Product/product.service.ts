import { Products } from '#db';
import { ApiError } from '#errors';

import type {
  ProductInstance,
  IProductDataForCreating,
} from './product.types.ts';

class ProductService {
  public getAllProducts = async (): Promise<ProductInstance[]> => {
    return await Products.findAll();
  };

  public getProduct = async (id: number): Promise<ProductInstance> => {
    const product = await Products.findByPk(id);

    if (!product) {
      throw ApiError.getBadRequestError('Product not found by id');
    }

    return product;
  };

  public createProduct = async (
    productData: IProductDataForCreating,
  ): Promise<ProductInstance> => {
    return await Products.create(productData);
  };
}

export const productService = new ProductService();
