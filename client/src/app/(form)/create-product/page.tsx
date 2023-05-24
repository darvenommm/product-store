import { CreateProduct } from '@/widgets';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Product',
  description: 'Form for create a new product',
};

export default function CreateProductPage(): JSX.Element {
  return <CreateProduct />;
}
