import { ErrorRequestHandler } from 'express';

import { ApiError } from '#root/errors/index.ts';

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _request,
  response,
  _next,
): void => {
  console.log(error);

  if (error instanceof ApiError) {
    response.status(error.status).json({
      message: error.message,
      errors: error.errors,
    });
    return;
  }

  response.status(500).json({ message: 'This error from server side' });
};
