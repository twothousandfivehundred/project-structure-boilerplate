import useLink from './hooks/useLink';
import { LinkProps } from './types';

const Link = ({ className, children, href, title }: LinkProps) => {
  const Component = useLink(href);

  return (
    <Component className={className} href={href} title={title}>
      {children}
    </Component>
  );
};

export default Link;
