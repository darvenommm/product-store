import { body, ValidationChain } from 'express-validator';

import { Validator } from '#helpers';

import type { RequestHandler } from 'express';

class ProductValidator extends Validator {
  private getTitleValidator = (): ValidationChain => {
    return body('title')
      .isString()
      .trim()
      .isLength({ min: 6, max: 255 })
      .escape();
  };

  private getDescriptionValidator = (): ValidationChain => {
    return body('description')
      .isString()
      .trim()
      .isLength({ min: 12, max: 5000 })
      .escape();
  };

  private getPriceValidator = (): ValidationChain => {
    return body('price').isNumeric().isInt({ min: 1 }).escape();
  };

  public getCreateProductValidators = (): Array<
    ValidationChain | RequestHandler
  > => {
    return [
      this.getTitleValidator(),
      this.getDescriptionValidator(),
      this.getPriceValidator(),
      this.getEndValidator(),
    ];
  };
}

export const productValidator = new ProductValidator();
