'use client';

import { Button } from '@/shared/ui/Button';
import { useAppSelector, useAppDispatch } from '@/shared/hooks/redux';
import { selectTheme, setTheme } from '@/entities/theme/themeSlice';

import { FaMoon as Moon } from 'react-icons/fa';
import { BsFillSunFill as Sun } from 'react-icons/bs';

import type { Theme } from '@/entities/theme/types';

interface IThemeSwitcher {
  startTheme: Theme;
}

// 1) start theme is given from server (from user cookie or prefer-scheme default light)
// 2) component challenge is switching the theme in the cookie and the storage
export function ThemeSwitcher({ startTheme }: IThemeSwitcher) {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme) ?? startTheme;

  const ButtonClickHandler = (): void => {
    document.documentElement.classList.remove(theme);

    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.cookie = `theme=${newTheme}; max-age=${63_072_000}`; // 2 years
    document.documentElement.classList.add(newTheme);

    dispatch(setTheme(newTheme));
  };

  return (
    <Button onClick={ButtonClickHandler}>
      {theme === 'light' ? <Moon size={25} /> : <Sun size={25} />}
    </Button>
  );
}
