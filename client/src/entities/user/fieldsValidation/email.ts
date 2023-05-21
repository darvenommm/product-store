import EmailValidator from 'email-validator';

import type { RegisterOptions } from 'react-hook-form';

export const emailValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required!',
  },
  validate: {
    isValid: (email: string) => {
      return EmailValidator.validate(email) || 'Incorrect email address';
    },
  },
};
