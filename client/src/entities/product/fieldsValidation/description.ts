import type { RegisterOptions } from 'react-hook-form';

export const descriptionValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  minLength: {
    value: 12,
    message: 'Description must be at least 12 characters long',
  },
  maxLength: {
    value: 5000,
    message: 'Description must be at most 5000 characters long',
  },
};
