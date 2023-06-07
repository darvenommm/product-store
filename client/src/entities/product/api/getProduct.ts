import { getBaseServerUrl } from '@/shared/helpers/api';

import { IProduct } from '../types';

export async function getProduct(id: number): Promise<IProduct> {
  const res = await fetch(`${getBaseServerUrl()}/api/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
