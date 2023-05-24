import { Express } from 'express';

import {
  corsMiddleware,
  cookieMiddleware,
  jsonMiddleware,
} from './library/index.ts';
import { errorMiddleware } from './customs/errorMiddleware.ts';

import type { RequestHandler } from 'express';

export const addMiddlewaresAtStart = (server: Express): void => {
  const middlewares: RequestHandler[] = [
    corsMiddleware,
    cookieMiddleware,
    jsonMiddleware,
  ];

  server.use(middlewares);
};

export const addMiddlewaresAtEnd = (server: Express): void => {
  server.use(errorMiddleware);
};
