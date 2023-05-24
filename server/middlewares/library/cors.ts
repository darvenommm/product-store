import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

const ORIGIN = process.env.CLIENT_DOMAIN ?? '*';

export const corsMiddleware = cors({
  origin: ORIGIN,
  credentials: true,
});
