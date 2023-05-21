'use client';

import { InputHTMLAttributes, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';

import { Button, Input } from '@/shared/ui';

import type { FormHTMLAttributes } from 'react';
import type {
  UseFormProps,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';

type Field = {
  labelText: string;
  placeholder: string;
  options?: RegisterOptions;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: InputHTMLAttributes<HTMLInputElement>[key];
};

type Fields<FormData> = {
  [Key in keyof FormData]: Field;
};

type FormTemplateProps<FormData extends FieldValues> = {
  fields: Fields<FormData>;
  submitHandler: (data: FormData) => Promise<void>;
  afterSuccessHandler: () => void;
  submitButtonText: string;

  order?: (keyof FormData)[];
  formValidatorSettings?: UseFormProps<FormData>;
  errorMessage?: string;
  className?: string;
} & {
  [key in keyof FormHTMLAttributes<HTMLFormElement>]: FormHTMLAttributes<HTMLFormElement>[key];
};

export function FormTemplate<FormData extends FieldValues>({
  fields,
  submitHandler,
  afterSuccessHandler,
  submitButtonText,

  order = [],
  formValidatorSettings = { mode: 'onTouched' },
  errorMessage = 'There was an error! Please come back here another time.',
  className = '',
  ...otherProps
}: FormTemplateProps<FormData>): JSX.Element {
  const id = useId();

  const { mutate, isLoading, isError } = useMutation<void, unknown, FormData>({
    mutationFn: submitHandler,
    onSuccess: afterSuccessHandler,
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
    .map(
      ([
        name,
        { labelText, placeholder, options, ...otherProps },
      ]): JSX.Element => {
        const inputId = `${id}-${name}`;

        return (
          <Input
            key={name}
            id={inputId}
            labelText={labelText}
            placeholder={placeholder}
            {...register(name as Path<FormData>, options)}
            errorText={(errors[name]?.message ?? '') as string}
            {...otherProps}
          />
        );
      },
    );

  return (
    <form
      className={formClassName}
      onSubmit={handleSubmit(formSubmitHandler)}
      autoComplete="off"
      {...otherProps}
    >
      {isError ? (
        <span className="block text-rose-500 text-4xl text-center">
          {errorMessage}
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