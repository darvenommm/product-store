import cors from 'cors';

import { getClientUrl } from '#helpers';

const ORIGIN = getClientUrl() ?? '*';

export const corsMiddleware = cors({
  origin: ORIGIN,
  credentials: true,
});
