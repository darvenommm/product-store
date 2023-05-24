import { getProducts } from '@/entities/product';

import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Product Store | Main Page',
  description: 'The store for buying products',
};

export default async function HomePage(): Promise<JSX.Element> {
  const data = await getProducts();

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
