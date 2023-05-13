import { Express } from 'express';

import { userRouter } from '#entities';

export const addRoutes = (server: Express): void => {
  const routes = [userRouter];
  server.use('/api', routes);
};
