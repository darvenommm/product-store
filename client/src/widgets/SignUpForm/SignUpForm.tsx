'use client';

import { FormTemplate } from '@/templates/FormTemplate';

import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/hooks/redux';

import {
  emailValidation,
  passwordValidation,
  fullNameValidation,
} from '@/entities/user/fieldsValidation';
import { updateIsAuthentication } from '@/entities/user/userSlice';
import { createUser } from '@/entities/user/api';

import type { IUserDataForCreating } from '@/entities/user/types';

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
