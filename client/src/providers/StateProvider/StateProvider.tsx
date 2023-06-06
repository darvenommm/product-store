'use client';

import { Provider } from 'react-redux';

import { store } from './store';

import type { Children } from '@/shared/types/react';

interface IStateProviderProps {
  children: Children;
}

export function StateProvider({ children }: IStateProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
