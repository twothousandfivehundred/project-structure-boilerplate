export const getMediaMatch = (query: string) => {
  const sanitizedQuery = query.replace(/^@media ?/m, '');
  const mediaQuery = !!window?.matchMedia?.(sanitizedQuery)?.matches;
  return mediaQuery;
};
