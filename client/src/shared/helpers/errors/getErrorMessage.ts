import { AxiosError } from 'axios';

import type { IErrorResponse } from '@/shared/types';

type CustomError = AxiosError<IErrorResponse> | Error;

export function getErrorMessage(error: CustomError): string {
  if (error instanceof AxiosError) {
    return error.response?.data.message;
  }

  return error.message;
}
