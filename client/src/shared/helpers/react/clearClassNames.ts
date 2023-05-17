export const clearClassNames = (className: string): string => {
  return className.replace(/\n/g, ' ').replace(/ {2,}/g, ' ').trim();
};
