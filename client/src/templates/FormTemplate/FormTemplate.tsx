'use client';

import { useRef } from 'react';
import { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';
import { AxiosError } from 'axios';

import { Button, Input, Textarea, FileInput } from '@/shared/ui';
import { getErrorMessage } from '@/shared/helpers';

import type { Field, FormTemplateProps } from './FormTemplateTypes';
import type { IErrorResponse } from '@/shared/types';
import type { FieldValues, Path } from 'react-hook-form';

export function FormTemplate<FormData extends FieldValues>({
  fields,
  submitHandler,
  afterSuccessHandler,
  submitButtonText,

  order = [],
  formValidatorSettings = { mode: 'onTouched' },
  className = '',
  ...otherProps
}: FormTemplateProps<FormData>): JSX.Element {
  const id = useId();
  const errorMessage = useRef<null | string>(null);

  const { mutate, isLoading } = useMutation<
    void,
    AxiosError<IErrorResponse>,
    FormData
  >({
    mutationFn: submitHandler,
    onSuccess: afterSuccessHandler,
    onError: (error): void => {
      const message = getErrorMessage(error);
      errorMessage.current = message || 'An error has occurred!';
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(formValidatorSettings);
  const formSubmitHandler: SubmitHandler<FormData> = (userData): void => {
    mutate(userData);
  };

  const formClassName =
    'bg flex flex-col gap-8 p-6 rounded-lg ' +
    `border-2 border-black dark:border-transparent ${className}`;

  // function for sort input by order value
  const compare = (a: [string, Field], b: [string, Field]) => {
    const aIndex = order.indexOf(a[0]) + 1 || Infinity;
    const bIndex = order.indexOf(b[0]) + 1 || Infinity;

    return aIndex - bIndex;
  };

  const inputs = Object.entries<Field>(fields)
    .sort(compare)
    .map(([name, { options, tagType, ...otherProps }]): JSX.Element => {
      const elementId = `${id}-${name}`;

      if (tagType === 'fileInput') {
        return (
          <FileInput
            key={name}
            id={elementId}
            {...register(name as Path<FormData>, options)}
            {...otherProps}
          />
        );
      }

      if (tagType === 'textarea') {
        return (
          <Textarea
            key={name}
            id={elementId}
            {...register(name as Path<FormData>, options)}
            {...otherProps}
          />
        );
      }

      return (
        <Input
          key={name}
          id={elementId}
          errorText={(errors[name]?.message ?? '') as string}
          {...register(name as Path<FormData>, options)}
          {...otherProps}
        />
      );
    });

  return (
    <form
      className={formClassName}
      onSubmit={handleSubmit(formSubmitHandler)}
      autoComplete="off"
      {...otherProps}
    >
      {errorMessage.current ? (
        <span className="block text-rose-500 text-4xl text-center ">
          {errorMessage.current}
        </span>
      ) : null}

      {inputs}

      <Button styleType="bright" disabled={isLoading}>
        {isLoading ? (
          <BeatLoader className="pt-1" color="white" />
        ) : (
          submitButtonText
        )}
      </Button>
    </form>
  );
}
