import { ApiError } from '#errors';
import { SESSION_KEY_NAME } from './user.constants.ts';

import type { Request } from 'express';

export const getSessionKey = (request: Request): string => {
  const sessionKey: string = request.cookies[SESSION_KEY_NAME];

  if (!sessionKey) {
    throw ApiError.getUnauthorizedError();
  }

  return sessionKey;
};
