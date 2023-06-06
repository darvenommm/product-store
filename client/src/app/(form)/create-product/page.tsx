import { CreateProduct } from '@/widgets';

import { CheckAuthentication } from '@/features/user';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Product',
  description: 'Form for create a new product',
};

export default function CreateProductPage(): JSX.Element {
  return (
    <CheckAuthentication
      redirect="/sign-in"
      infoMessage="You must be authenticated to create product"
    >
      <CreateProduct />
    </CheckAuthentication>
  );
}
