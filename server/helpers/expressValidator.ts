import { validationResult } from 'express-validator';
import { ApiError } from '#root/errors/index.ts';

import type { RequestHandler } from 'express';

export class Validator {
  private validatingChecker: RequestHandler = (request, _, next): void => {
    const result = validationResult(request);

    if (!result.isEmpty()) {
      next(
        ApiError.getBadRequestError(
          'You sent data in body, header or cookie who is incorrect',
          result.array(),
        ),
      );
    }

    next();
  };

  protected getEndValidator = (): typeof this.validatingChecker => {
    return this.validatingChecker;
  };
}
