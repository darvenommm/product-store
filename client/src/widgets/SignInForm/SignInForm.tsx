'use client';

import { useRouter } from 'next/navigation';

import { FormTemplate } from '@/templates';
import { signIn } from '@/entities/user';
import { useAppDispatch } from '@/shared/hooks';
import { updateIsAuthentication } from '@/entities/user';
import { emailValidation, passwordValidation } from '@/entities/user';

import type { IUserDataForSignIn } from '@/entities/user';

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
