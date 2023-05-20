'use client';

import { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as EmailValidator from 'email-validator';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import BeatLoader from 'react-spinners/BeatLoader';

import { useAppDispatch } from '@/shared';
import { updateIsAuthentication } from '@/entities/user';
import { Button, Input } from '@/shared';
import { createUser, IUserDataForCreating } from '@/entities/user';

interface ISignUpFormProps {
  className?: string;
}

export function SignUpForm({ className }: ISignUpFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const id = useId();

  const router = useRouter();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createUser,
    onSuccess: (): void => {
      dispatch(updateIsAuthentication(true));
      router.push('/');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataForCreating>({ mode: 'onTouched' });
  const formSubmitHandler: SubmitHandler<IUserDataForCreating> = (userData) => {
    mutate(userData);
  };

  const formClassName = `
    bg
    flex flex-col gap-8
    p-6 rounded-lg
    border-2 border-black dark:border-transparent
    ${className}
  `;

  return (
    <form
      className={formClassName}
      onSubmit={handleSubmit(formSubmitHandler)}
      autoComplete="off"
    >
      {isError ? (
        <span className="block text-rose-500 text-4xl text-center">
          There was an error! Please come back here another time
        </span>
      ) : null}
      <Input
        id={`${id}-fullName`}
        labelText="full name*:"
        placeholder="Input your full name..."
        errorText={errors.fullName?.message}
        {...register('fullName', {
          required: {
            value: true,
            message: 'This field is required!',
          },
          minLength: {
            value: 4,
            message: 'The full name must be greater than or equal to 4 chars!',
          },
          maxLength: {
            value: 64,
            message:
              'The full name must be less than or equal to 64 characters!',
          },
        })}
      />
      <Input
        id={`${id}-email`}
        labelText="email*:"
        placeholder="Input your email..."
        errorText={errors.email?.message}
        {...register('email', {
          required: {
            value: true,
            message: 'This field is required!',
          },
          validate: {
            isValid: (email) => {
              return (
                EmailValidator.validate(email) || 'Incorrect email address'
              );
            },
          },
        })}
      />
      <Input
        id={`${id}-password`}
        labelText="password*:"
        placeholder="Input your password..."
        inputType="password"
        errorText={errors.password?.message}
        {...register('password', {
          required: {
            value: true,
            message: 'This field is required!',
          },
          minLength: {
            value: 6,
            message: 'The password must be greater than or equal to 6 chars!',
          },
          maxLength: {
            value: 32,
            message:
              'The password must be less than or equal to 32 characters!',
          },
        })}
      />
      <Button styleType="bright" disabled={isLoading}>
        {isLoading ? <BeatLoader className="pt-1" color="white" /> : 'Create'}
      </Button>
    </form>
  );
}
