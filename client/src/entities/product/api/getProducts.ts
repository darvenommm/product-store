import { getBaseServerUrl } from '@/shared/helpers';

import { IProduct } from '../types';

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${getBaseServerUrl()}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
