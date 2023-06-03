import * as dotenv from 'dotenv';
dotenv.config();

const serverUrl = process.env.SERVER_URL;
const clientUrl = process.env.CLIENT_DOMAIN;

if (!serverUrl) {
  throw new Error('Not found someone variable in env');
}

export const getServerUrl = (): string => {
  return serverUrl;
};

export const getClientUrl = (): string | undefined => {
  return clientUrl;
};
