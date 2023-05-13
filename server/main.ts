import * as dotenv from 'dotenv';
dotenv.config();

import { createDatabase } from '#db';

import express from 'express';
import { addRoutes } from '#routes';
import { addMiddlewaresAtStart, addMiddlewaresAtEnd } from '#middlewares';

const PORT = Number(process.env.PORT ?? 3001);

const app = express();

addMiddlewaresAtStart(app);
addRoutes(app);
addMiddlewaresAtEnd(app);

try {
  await createDatabase();

  app.listen(PORT, () => {
    console.log(`Server was started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
