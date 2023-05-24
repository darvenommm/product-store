import { Express } from 'express';

import { userRouter, productRouter } from '#entities';

export const addRoutes = (server: Express): void => {
  const routes = [userRouter, productRouter];
  server.use('/api', routes);
};
