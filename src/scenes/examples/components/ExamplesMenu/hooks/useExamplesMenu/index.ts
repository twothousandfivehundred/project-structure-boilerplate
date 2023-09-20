import { useCallback } from 'react';
import routes from '~/constants/routes';
import { interpolateRoutePath } from '~/constants/routes/helpers';

const useExamplesMenu = () => {
  const constructHref = useCallback(
    (exampleSlug: string) =>
      interpolateRoutePath(routes.examplesExample, { exampleSlug }),
    [],
  );

  return {
    constructHref,
  };
};

export default useExamplesMenu;
