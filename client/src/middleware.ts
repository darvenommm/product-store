import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import ms from 'ms';

export const config = {
  matcher: '/:path*',
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set theme value in cookie
  if (!request.cookies.has('theme')) {
    const theme = request.headers.get('sec-ch-prefers-color-scheme') ?? 'light';

    response.cookies.set({
      name: 'theme',
      value: theme,
      priority: 'medium',
      maxAge: ms('2 years') / 1000,
    });
  }

  return response;
}
