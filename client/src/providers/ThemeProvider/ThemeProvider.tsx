'use client';

import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/hooks';
import { setTheme } from '@/entities/theme';

import type { Theme } from '@/entities/theme';
import type { Children } from '@/shared/types';

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
