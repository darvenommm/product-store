import type { RegisterOptions } from 'react-hook-form';

export const passwordValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  validate: {
    minLength: (value): true | string => {
      return (
        value.trim().length >= 6 ||
        'Description must be at least 6 characters long without spaces'
      );
    },
    maxLength: (value): true | string => {
      return (
        value.trim().length <= 32 ||
        'Description must be at most 32 characters long without spaces'
      );
    },
  },
};
