import { axios } from '@/shared';

export async function checkAuthentication(): Promise<boolean> {
  const { data: isAuthentication } = await axios.get<boolean>('/api/is-sign');
  return isAuthentication;
}
