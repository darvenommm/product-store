'use client';

import { useRouter } from 'next/navigation';

import { FormTemplate } from '@/templates/FormTemplate';
import { createProduct } from '@/entities/product/api';
import {
  titleValidation,
  descriptionValidation,
  priceValidation,
  photoValidation,
} from '@/entities/product/fieldsValidation';

import type { IProductDataForCreating } from '@/entities/product/types';

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
          placeholder: "Input product's title...",
          options: titleValidation,
        },
        price: {
          labelText: 'Price($)*:',
          placeholder: "Input product's price...",
          options: priceValidation,
          type: 'number',
          min: 1,
        },
        photo: {
          tagType: 'fileInput',
          labelText: 'Photo*:',
          placeholder: "Choose product's photo...",
          textAfter: "Product's photo is selected",
          options: photoValidation,
          accept: '.jpg,.jpeg,.png,.webp,.avif',
        },
        description: {
          labelText: 'Description*:',
          placeholder: "Input product's description...",
          tagType: 'textarea',
          options: descriptionValidation,
        },
      }}
      order={['title', 'price', 'photo', 'description']}
      afterSuccessHandler={afterSuccessHandler}
      submitHandler={createProduct}
      submitButtonText="Create product"
      successTextMessage="Product created successfully! Soon your product will be available. You can reload this page."
    />
  );
}
