import { ApiError } from '#errors';
import { SESSION_KEY_NAME } from './user.constants.ts';
import { userService } from './user.service.ts';

import type { Request, RequestHandler } from 'express';

const getSessionKey = (request: Request): string => {
  const sessionKey: string = request.cookies[SESSION_KEY_NAME];

  if (!sessionKey) {
    throw ApiError.getUnauthorizedError();
  }

  return sessionKey;
};

export const isAuthentication: RequestHandler = async (
  request,
  _,
  next,
): Promise<void> => {
  try {
    const sessionKey = getSessionKey(request);

    // if method don't find user, he throw error
    await userService.findUserBySessionKey(sessionKey);
    next();
  } catch (error) {
    next(error);
  }
};

export const isAdmin: RequestHandler = async (
  request,
  _,
  next,
): Promise<void> => {
  try {
    const sessionKey = getSessionKey(request);

    const user = await userService.findUserBySessionKey(sessionKey);
    const roles = await user.getRoles();
    const isAdmin = roles.some((role) => role.name === 'admin');
    if (!isAdmin) {
      throw ApiError.getForbiddenError();
    }

    next();
  } catch (error) {
    next(error);
  }
};
