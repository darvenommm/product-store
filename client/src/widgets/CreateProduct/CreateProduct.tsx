'use client';

import { useRouter } from 'next/navigation';

import { FormTemplate } from '@/templates';
import { createProduct } from '@/entities/product';

import type { IProductDataForCreating } from '@/entities/product';

export function CreateProduct(): JSX.Element {
  const router = useRouter();

  const afterSuccessHandler = (): void => {
    router.push('/');
  };

  return (
    <FormTemplate<IProductDataForCreating>
      fields={{
        title: {
          labelText: 'Title*:',
          placeholder: 'Input your title...',
        },
        price: {
          labelText: 'Price*:',
          placeholder: 'Input your price...',
        },
        photo: {
          tagType: 'fileInput',
          labelText: 'Photo*:',
        },
        description: {
          labelText: 'Description*:',
          placeholder: 'Input your description...',
          tagType: 'textarea',
        },
      }}
      order={['title', 'price', 'photo', 'description']}
      afterSuccessHandler={afterSuccessHandler}
      submitHandler={createProduct}
      submitButtonText="Create product"
    />
  );
}
