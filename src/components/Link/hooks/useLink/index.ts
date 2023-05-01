import { useMemo } from 'react';
import { LinkProps } from '../../types';
import ExternalLink from '../../components/ExternalLink';
import InternalLink from '../../components/InternalLink';
import { getComponentFromHref } from './logic';

const useLink = (href: LinkProps['href']) => {
  const Component = useMemo(
    () => getComponentFromHref(href, ExternalLink, InternalLink),
    [href],
  );

  return Component;
};

export default useLink;
