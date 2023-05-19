import { default as realAxios } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

if (!baseURL) {
  throw new Error('NOT FOUND SERVER URL FROM .ENV FILE!!!');
}

export const axios = realAxios.create({
  baseURL,
});
