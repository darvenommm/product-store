import { Router } from 'express';

import { userControllers } from './user.controllers.ts';
import { userValidator } from './user.validator.ts';
import { isAdmin, isAuthentication } from './user.middleware.ts';

export const userRouter = Router();

// auth
userRouter.get('/is-sign', isAuthentication, userControllers.isSign);
userRouter.post(
  '/sign-up',
  userValidator.getSignUpValidators(),
  userControllers.signUp,
);
userRouter.post(
  '/sign-in',
  userValidator.getSignInValidator(),
  userControllers.signIn,
);
userRouter.post('/sign-out', userControllers.signOut);

// rest
userRouter.get('/users', isAdmin, userControllers.getUsers);
