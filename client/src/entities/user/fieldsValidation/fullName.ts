import type { RegisterOptions } from 'react-hook-form';

export const fullNameValidation: RegisterOptions = {
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
    message: 'The full name must be less than or equal to 64 characters!',
  },
};
