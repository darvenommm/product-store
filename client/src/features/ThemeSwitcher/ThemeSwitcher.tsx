'use client';

import { useState } from 'react';

import { getCookieValue } from '@/shared/helpers';
import { Button } from '@/shared/ui';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';

type Theme = 'light' | 'dark';

// theme value contains in cookie by middleware
// documentElement has theme class by layout
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (getCookieValue(document.cookie) ?? 'light') as Theme;
  });

  const ButtonClickHandler = (): void => {
    document.documentElement.classList.remove(theme);

    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.cookie = `theme=${newTheme}; max-age=${63_072_000}`; // 2 years
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <Button onClick={ButtonClickHandler}>
      {theme === 'light' ? <FaMoon size={25} /> : <BsFillSunFill size={25} />}
    </Button>
  );
}
