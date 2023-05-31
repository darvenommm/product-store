import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import type {
  UseFormProps,
  RegisterOptions,
  FieldValues,
} from 'react-hook-form';

import type { FormHTMLAttributes } from 'react';

type InputField = {
  tagType?: 'input';
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: InputHTMLAttributes<HTMLInputElement>[key];
};

type TextAreaField = {
  tagType: 'textarea';
} & {
  [key in keyof TextareaHTMLAttributes<HTMLTextAreaElement>]: TextareaHTMLAttributes<HTMLTextAreaElement>[key];
};

type FileInputField = {
  tagType: 'fileInput';
  textAfter?: string;
} & {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: InputHTMLAttributes<HTMLInputElement>[key];
};

export type Field = {
  labelText: string;
  options?: RegisterOptions;
  placeholder?: string;
} & (InputField | TextAreaField | FileInputField);

export type Fields<FormData> = {
  [Key in keyof FormData]: Field;
};

export type FormTemplateProps<FormData extends FieldValues> = {
  fields: Fields<FormData>;
  submitHandler: (data: FormData) => Promise<void>;
  afterSuccessHandler: () => void;
  submitButtonText: string;
  successTextMessage: string;

  order?: (keyof FormData)[];
  formValidatorSettings?: UseFormProps<FormData>;
  className?: string;
} & {
  [key in keyof FormHTMLAttributes<HTMLFormElement>]: FormHTMLAttributes<HTMLFormElement>[key];
};
