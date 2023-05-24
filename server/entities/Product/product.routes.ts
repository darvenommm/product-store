import { Router } from 'express';

import { productController } from './product.controllers.ts';
import { productValidator } from './product.validator.ts';
import { upload } from '#middlewares';

export const productRouter = Router();

productRouter.get('/products', productController.getAllProducts);
productRouter.post(
  '/products',
  upload.single('photo'),
  productValidator.getCreateProductValidators(),
  productController.createProduct,
);
