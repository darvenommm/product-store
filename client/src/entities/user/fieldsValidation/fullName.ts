import type { RegisterOptions } from 'react-hook-form';

export const fullNameValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  validate: {
    minLength: (value): true | string => {
      return (
        value.trim().length >= 4 ||
        'Description must be at least 4 characters long without spaces'
      );
    },
    maxLength: (value): true | string => {
      return (
        value.trim().length <= 64 ||
        'Description must be at most 64 characters long without spaces'
      );
    },
  },
};
