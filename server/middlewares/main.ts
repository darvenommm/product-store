import { Express, json } from 'express';
import { errorMiddleware } from './customs/errorMiddleware.ts';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import * as dotenv from 'dotenv';
dotenv.config();

const ORIGIN = process.env.CLIENT_DOMAIN ?? '*';

export const addMiddlewaresAtStart = (server: Express): void => {
  server.use(cors({ origin: ORIGIN }));
  server.use(json());
  server.use(cookieParser());
};

export const addMiddlewaresAtEnd = (server: Express): void => {
  server.use(errorMiddleware);
};
