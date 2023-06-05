'use client';

import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@/shared/hooks';
import { selectTheme } from '@/entities/theme';

import type { Children } from '@/shared/types';

interface IToastifyProviderProps {
  children: Children;
}

export function ToastifyProvider({
  children,
}: IToastifyProviderProps): JSX.Element {
  const theme = useAppSelector(selectTheme) ?? 'colored';

  return (
    <>
      {children}
      <ToastContainer position="bottom-right" theme={theme} />
    </>
  );
}
