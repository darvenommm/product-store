import { body, ValidationChain } from 'express-validator';

import { Validator } from '#helpers';

import type { RequestHandler } from 'express';

class UserValidator extends Validator {
  private getFullNameValidator = (): ValidationChain => {
    return body('fullName')
      .isString()
      .trim()
      .escape()
      .isLength({ min: 4, max: 64 });
  };

  private getEmailValidator = (): ValidationChain => {
    return body('email').isString().trim().isEmail().escape().toLowerCase();
  };

  private getPasswordValidator = (): ValidationChain => {
    return body('password')
      .isString()
      .trim()
      .escape()
      .isLength({ min: 6, max: 32 });
  };

  public getSignUpValidators = (): Array<ValidationChain | RequestHandler> => {
    return [
      this.getFullNameValidator(),
      this.getEmailValidator(),
      this.getPasswordValidator(),
      this.getEndValidator(),
    ];
  };

  public getSignInValidator = (): Array<ValidationChain | RequestHandler> => {
    return [
      this.getEmailValidator(),
      this.getPasswordValidator(),
      this.getEndValidator(),
    ];
  };
}

export const userValidator = new UserValidator();
