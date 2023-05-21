import { axios } from '@/shared/helpers';

export async function signOut(): Promise<void> {
  axios.post('/api/sign-out');
}
