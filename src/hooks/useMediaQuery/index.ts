import { useCallback, useEffect, useMemo, useState } from 'react';
import { throttle } from '~/services/utils/performance';

import { getMediaMatch } from './logic';

const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    setMatch(getMediaMatch(query));
  }, [query]);

  const onResizeChange = useCallback(() => {
    setMatch(getMediaMatch(query));
  }, [setMatch, query]);

  const throttledResizeChange = useMemo(
    () => throttle(onResizeChange, 200),
    [onResizeChange],
  );

  useEffect(() => {
    window?.addEventListener('resize', throttledResizeChange);

    return () => {
      window?.removeEventListener('resize', throttledResizeChange);
    };
  }, [throttledResizeChange]);

  return match;
};

export default useMediaQuery;
