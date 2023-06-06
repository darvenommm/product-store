'use client';

import { useRouter } from 'next/navigation';

import { FormTemplate } from '@/templates/FormTemplate';
import { signIn } from '@/entities/user/api';
import { useAppDispatch } from '@/shared/hooks/redux';
import { updateIsAuthentication } from '@/entities/user/userSlice';
import {
  emailValidation,
  passwordValidation,
} from '@/entities/user/fieldsValidation';

import type { IUserDataForSignIn } from '@/entities/user/types';

export function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const afterSuccessHandler = (): void => {
    dispatch(updateIsAuthentication(true));
    router.push('/');
  };

  return (
    <FormTemplate<IUserDataForSignIn>
      fields={{
        password: {
          labelText: 'Password*:',
          placeholder: 'Input your password...',
          options: passwordValidation,
          type: 'password',
        },
        email: {
          labelText: 'Email*:',
          placeholder: 'Input your email...',
          options: emailValidation,
        },
      }}
      order={['email', 'password']}
      submitHandler={signIn}
      afterSuccessHandler={afterSuccessHandler}
      submitButtonText="Sign In"
      successTextMessage="You are sign in"
    />
  );
}
