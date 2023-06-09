import { axios } from '@/shared/helpers/api';

import type { IUserDataForSignIn } from '../types';

export function signIn(data: IUserDataForSignIn): Promise<void> {
  return axios.post('/api/sign-in', data);
}
