import { getBaseServerUrl } from '@/shared/helpers/api';

import { IProduct } from '../types';

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${getBaseServerUrl()}/api/products`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
