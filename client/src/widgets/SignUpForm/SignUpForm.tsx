'use client';

import { FormTemplate } from '@/templates';

import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/hooks';

import {
  emailValidation,
  passwordValidation,
  fullNameValidation,
  updateIsAuthentication,
} from '@/entities/user';
import { createUser } from '@/entities/user';

import type { IUserDataForCreating } from '@/entities/user';

export function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const afterSuccessHandler = (): void => {
    dispatch(updateIsAuthentication(true));
    router.push('/');
  };

  return (
    <FormTemplate<IUserDataForCreating>
      fields={{
        fullName: {
          labelText: 'Full name*:',
          placeholder: 'Input your full name...',
          options: fullNameValidation,
        },
        email: {
          labelText: 'Email*:',
          placeholder: 'Input your email...',
          options: emailValidation,
        },
        password: {
          labelText: 'Password*:',
          placeholder: 'Input your password...',
          options: passwordValidation,
          type: 'password',
        },
      }}
      order={['fullName', 'email', 'password']}
      submitHandler={createUser}
      afterSuccessHandler={afterSuccessHandler}
      submitButtonText="Sign Up"
      successTextMessage="You are sign up"
    />
  );
}
