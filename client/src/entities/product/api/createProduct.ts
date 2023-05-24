import jsonToFormData from '@ajoelp/json-to-formdata';

import { axios } from '@/shared/helpers';

import type { IProductDataForCreating, IProductDataForSending } from '../types';

export function createProduct(data: IProductDataForCreating): Promise<void> {
  const dataForSending: IProductDataForSending = {
    ...data,
    photo: data.photo[0],
  };
  const formData = jsonToFormData(dataForSending);

  return axios.post('/api/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
