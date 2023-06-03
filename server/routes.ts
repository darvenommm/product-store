import express from 'express';

import { userRouter, productRouter } from '#entities';
import { resolve } from 'node:path';

import type { Express } from 'express';

export const addRoutes = (server: Express): void => {
  const routes = [userRouter, productRouter];
  server.use('/api', routes);

  server.use('/photos', express.static(resolve('static', 'photos')));
};
