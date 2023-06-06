'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { FileInput } from '@/shared/ui/FileInput';
import { Textarea } from '@/shared/ui/Textarea';

import { getErrorMessage } from '@/shared/helpers/errors';

import type { Field, FormTemplateProps } from './FormTemplateTypes';
import type { IErrorResponse } from '@/shared/types/serverResponse';
import type { FieldValues, Path } from 'react-hook-form';

export function FormTemplate<FormData extends FieldValues>({
  fields,
  submitHandler,
  afterSuccessHandler,
  submitButtonText,
  successTextMessage,

  order = [],
  formValidatorSettings = { mode: 'onSubmit' },
  className = '',
  ...otherProps
}: FormTemplateProps<FormData>): JSX.Element {
  const { mutate, isLoading } = useMutation<
    void,
    AxiosError<IErrorResponse>,
    FormData
  >({
    mutationFn: submitHandler,
    onSuccess: (): void => {
      afterSuccessHandler();
      toast.success(successTextMessage, { delay: 500 });
    },
    onError: (error): void => {
      const message = getErrorMessage(error);
      toast.error(message, { delay: 500 });
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
    'bg flex flex-col gap-8 p-6 rounded-lg mb-3 ' +
    `border-2 border-black dark:border-transparent ${className}`;

  // function for sort inputs by order value
  const compare = (a: [string, Field], b: [string, Field]) => {
    const aIndex = order.indexOf(a[0]) + 1 || Infinity;
    const bIndex = order.indexOf(b[0]) + 1 || Infinity;

    return aIndex - bIndex;
  };

  const inputs = Object.entries<Field>(fields)
    .sort(compare)
    .map(([name, { options, tagType, ...otherProps }]): JSX.Element => {
      const errorText = (errors[name]?.message ?? '') as string;

      if (tagType === 'fileInput') {
        const textAfter =
          'textAfter' in otherProps ? otherProps.textAfter : undefined;

        return (
          <FileInput
            key={name}
            errorText={errorText}
            textAfter={textAfter}
            {...register(name as Path<FormData>, options)}
            {...otherProps}
          />
        );
      }

      if (tagType === 'textarea') {
        return (
          <Textarea
            key={name}
            errorText={errorText}
            {...register(name as Path<FormData>, options)}
            {...otherProps}
          />
        );
      }

      return (
        <Input
          key={name}
          errorText={errorText}
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
