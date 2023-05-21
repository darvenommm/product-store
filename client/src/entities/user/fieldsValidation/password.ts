import type { RegisterOptions } from 'react-hook-form';

export const passwordValidation: RegisterOptions = {
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
    message: 'The password must be less than or equal to 32 characters!',
  },
};
