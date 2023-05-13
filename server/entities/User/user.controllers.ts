import ms from 'ms';

import { userService } from './user.service.ts';
import { SESSION_KEY_NAME } from './user.constants.ts';

import type { RequestHandler, Response } from 'express';
import type { IUserDataForCreating, IUserDataForSignIn } from './user.types.ts';

class UserControllers {
  private setCookie = (response: Response, sessionKey: string): Response => {
    return response.cookie(SESSION_KEY_NAME, sessionKey, {
      httpOnly: true,
      maxAge: ms('3 days'),
    });
  };

  public getUsers: RequestHandler = async (
    _,
    response,
    next,
  ): Promise<void> => {
    try {
      const users = await userService.getAllUsers();
      response.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  public signUp: RequestHandler = async (
    request,
    response,
    next,
  ): Promise<void> => {
    try {
      const userData: IUserDataForCreating = request.body;
      const newUser = await userService.createUser(userData);
      this.setCookie(response, newUser.sessionKey).sendStatus(201);
    } catch (error) {
      next(error);
    }
  };

  public signIn: RequestHandler = async (
    request,
    response,
    next,
  ): Promise<void> => {
    try {
      const userData: IUserDataForSignIn = request.body;
      const user = await userService.findUserByData(userData);
      await userService.updateSessionKey(user);
      this.setCookie(response, user.sessionKey).sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public signOut: RequestHandler = async (_, response, next): Promise<void> => {
    try {
      response.clearCookie(SESSION_KEY_NAME).sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export const userControllers = new UserControllers();
