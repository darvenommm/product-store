import * as bcrypt from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { Users } from '#db';
import { ApiError } from '#root/errors/index.ts';

import type {
  IUserDataForCreating,
  IUserDataForSignIn,
  UserInstance,
} from './user.types.ts';

class UserService {
  public createUser = async (
    userData: IUserDataForCreating,
  ): Promise<UserInstance> => {
    const user = await Users.findOne({ where: { email: userData.email } });
    if (user) {
      throw ApiError.getBadRequestError('This email address is used');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const sessionKey = uuidV4();

    return Users.create({ ...userData, sessionKey, password: hashedPassword });
  };

  public findUserByData = async ({
    email,
    password,
  }: IUserDataForSignIn): Promise<UserInstance> => {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      throw ApiError.getBadRequestError('This user is not registered in app');
    }

    const isCorrectPassword = bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw ApiError.getBadRequestError('Password is incorrect');
    }

    return user;
  };

  public findUserBySessionKey = async (
    sessionKey: string,
  ): Promise<UserInstance> => {
    const user = await Users.findOne({ where: { sessionKey } });
    if (!user) {
      throw ApiError.getUnauthorizedError();
    }

    return user;
  };

  public updateSessionKey = async (user: UserInstance): Promise<void> => {
    const newSessionKey = uuidV4();
    await user.update({ sessionKey: newSessionKey });
  };

  public getAllUsers = async (): Promise<UserInstance[]> => {
    return await Users.findAll();
  };
}

export const userService = new UserService();
