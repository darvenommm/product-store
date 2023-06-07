import { RequestHandler } from 'express';

import { productService } from './product.service.ts';
import {
  IProductDataFromClient,
  IProductDataForCreating,
} from './product.types.ts';
import { ApiError } from '#errors';
import { getServerUrl } from '#helpers';

class ProductController {
  public getAllProducts: RequestHandler = async (
    _,
    response,
    next,
  ): Promise<void> => {
    try {
      const products = await productService.getAllProducts();
      response.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  public getProduct: RequestHandler = async (
    request,
    response,
    next,
  ): Promise<void> => {
    try {
      const id = Number(request.params.id);
      const product = await productService.getProduct(id);
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  public createProduct: RequestHandler = async (
    request,
    response,
    next,
  ): Promise<void> => {
    try {
      const productData: IProductDataFromClient = request.body;
      const serverUrl = getServerUrl();
      const fileUrl = `${serverUrl}/photos/${request.file?.filename}`;

      if (!fileUrl) {
        throw ApiError.getBadRequestError('Not found file in request');
      }

      const dataForCreating: IProductDataForCreating = {
        ...productData,
        photoUrl: fileUrl,
      };
      const product = await productService.createProduct(dataForCreating);
      response.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };
}

export const productController = new ProductController();
