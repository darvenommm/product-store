import type { RegisterOptions } from 'react-hook-form';

export const photoValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
};
