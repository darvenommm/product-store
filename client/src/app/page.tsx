import { getProducts } from '@/entities/product';
import { Products } from '@/widgets';

import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Product Store | Main Page',
  description: 'The store for buying products',
};

export default async function HomePage(): Promise<JSX.Element> {
  const products = await getProducts();

  return <Products products={products} />;
}
