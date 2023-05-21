export const getCookieValue = (name: string): string | void => {
  return name
    .split(';')
    .find((cookie) => cookie.includes('theme'))
    ?.split('=')[1];
};
