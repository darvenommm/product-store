import { Users } from '#db';

export interface IUserDataForCreating {
  fullName: string;
  email: string;
  password: string;
}

export interface IUserDataForSignIn {
  email: string;
  password: string;
}

export type UserInstance = InstanceType<typeof Users>;
