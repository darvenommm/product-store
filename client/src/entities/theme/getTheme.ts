import { cookies, headers } from 'next/headers';
import { Theme } from './types';

export function getTheme(): Theme {
  const cookieTheme = cookies().get('theme')?.value;
  const themeFromPreferScheme = headers().get('sec-ch-prefers-color-scheme');

  return (cookieTheme ?? themeFromPreferScheme ?? 'light') as Theme;
}
