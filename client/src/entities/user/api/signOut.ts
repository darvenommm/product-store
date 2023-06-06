import { axios } from '@/shared/helpers/api';

export async function signOut(): Promise<void> {
  axios.post('/api/sign-out');
}
