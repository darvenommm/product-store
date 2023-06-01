'use client';

import { ToastContainer } from 'react-toastify';

import type { Children } from '@/shared/types';

interface IToastifyProviderProps {
  children: Children;
}

export function ToastifyProvider({
  children,
}: IToastifyProviderProps): JSX.Element {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
}
