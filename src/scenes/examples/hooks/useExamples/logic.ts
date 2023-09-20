import { examples } from '../../constants';

export const getSubComponent = (
  exampleSlug: string | undefined,
  examplesList: typeof examples,
) => {
  if (!exampleSlug) return null;
  const foundExample = examplesList.find(({ slug }) => slug === exampleSlug);
  return foundExample?.component || null;
};
