import type { RegisterOptions } from 'react-hook-form';

export const titleValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  minLength: {
    value: 6,
    message: 'Title must be at least 6 characters long',
  },
  maxLength: {
    value: 128,
    message: 'Title must be at most 128 characters long',
  },
};
