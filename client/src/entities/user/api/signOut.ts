import { axios } from '@/shared';

export async function signOut(): Promise<void> {
  axios.post('/api/sign-out');
}
