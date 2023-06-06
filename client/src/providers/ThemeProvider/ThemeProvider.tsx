'use client';

import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/hooks/redux';
import { setTheme } from '@/entities/theme/themeSlice';

import type { Theme } from '@/entities/theme/types';
import type { Children } from '@/shared/types/react';

interface IThemeProvider {
  startTheme: Theme;
  children: Children;
}

export function ThemeProvider({
  children,
  startTheme,
}: IThemeProvider): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(setTheme(startTheme));
  }, [dispatch, startTheme]);

  return <>{children}</>;
}
