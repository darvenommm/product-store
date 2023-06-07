import { getProduct } from '@/entities/product/api';
import { Product } from '@/widgets/Product';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product',
  description: 'Product page',
};

interface IProductPage {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: IProductPage): Promise<Metadata> {
  const product = await getProduct(Number(id));

  return {
    title: `Product: ${product.title}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params: { id },
}: IProductPage): Promise<JSX.Element> {
  const product = await getProduct(Number(id));

  return <Product {...product} />;
}
