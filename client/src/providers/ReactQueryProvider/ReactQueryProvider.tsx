'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { Children } from '@/shared/types/react';

interface IReactQueryProviderProps {
  children: Children;
}

const queryClient = new QueryClient();

export function ReactQueryProvider({
  children,
}: IReactQueryProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
}
