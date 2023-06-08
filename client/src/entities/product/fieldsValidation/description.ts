import type { RegisterOptions } from 'react-hook-form';

export const descriptionValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  validate: {
    minLength: (value): true | string => {
      return (
        value.trim().length >= 12 ||
        'Description must be at least 12 characters long without spaces'
      );
    },
    maxLength: (value): true | string => {
      return (
        value.trim().length <= 5000 ||
        'Description must be at most 5000 characters long without spaces'
      );
    },
  },
};
