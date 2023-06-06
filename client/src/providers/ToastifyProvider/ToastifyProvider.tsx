'use client';

import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@/shared/hooks/redux';
import { selectTheme } from '@/entities/theme/themeSlice';

import type { Children } from '@/shared/types/react';

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
