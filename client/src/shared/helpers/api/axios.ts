import { default as realAxios } from 'axios';

import { getBaseServerUrl } from './getBaseServerUrl';

export const axios = realAxios.create({
  baseURL: getBaseServerUrl(),
  withCredentials: true,
});
