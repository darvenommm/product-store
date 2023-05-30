import type { RegisterOptions } from 'react-hook-form';

export const priceValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  validate: {
    isNumber: (number) => isFinite(number) || 'Price must be a number',
  },
  min: {
    value: 1,
    message: 'Price must be at least 1',
  },
};
