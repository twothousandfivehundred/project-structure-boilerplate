import { useCallback, useMemo, useState } from 'react';
import useParams from '~/hooks/useParams';
import { examples } from '../../constants';
import { getSubComponent } from './logic';

const useExamples = () => {
  const [subComponentRenderCount, setSubComponentRenderCount] =
    useState<number>(0);
  const { exampleSlug } = useParams();

  const SubComponent = useMemo(
    () => getSubComponent(exampleSlug, examples),
    [exampleSlug],
  );

  const updateSubComponentRenderCount = useCallback(() => {
    setSubComponentRenderCount((prevCount: number) => prevCount + 1);
  }, [setSubComponentRenderCount]);

  return {
    SubComponent,
    renderCount: subComponentRenderCount,
    updateSubComponentRenderCount,
  };
};

export default useExamples;
