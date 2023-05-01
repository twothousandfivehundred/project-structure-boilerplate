/* eslint-disable react/jsx-props-no-spreading */
/* 
  Example YUCKY component.. use ~/components/Link.. or so help me!
*/
import { useMemo } from 'react';
import {
  Link as InternalLink,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';
import clsx from 'clsx';

const Link = ({
  className,
  children,
  href,
  title,
}: React.PropsWithChildren<{
  className?: string;
  title?: string;
  href: string;
}>) => {
  const isExternal = useMemo(() => {
    const externalUrlRegex = /^(https?):?\/\/.+/;
    return externalUrlRegex.test(href);
  }, [href]);
  const path = useResolvedPath(href);
  const location = useLocation();
  const isSelected = useMemo(
    () => path.pathname === location.pathname,
    [path, location],
  );

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        title={title}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <InternalLink
      className={clsx(className, isSelected && 'active')}
      title={title}
      to={href}
    >
      {children}
    </InternalLink>
  );
};

export default Link;
