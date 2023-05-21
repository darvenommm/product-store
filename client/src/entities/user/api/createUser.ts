import { axios } from '@/shared/helpers';

import type { IUserDataForCreating } from '../types';

export function createUser(data: IUserDataForCreating): Promise<void> {
  return axios.post('/api/sign-up', data);
}
