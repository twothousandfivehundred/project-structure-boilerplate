import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { LinkProps } from '../../types';
import useIsPathSelected from '~/hooks/useIsPathSelected';

const InternalLink = ({ className, children, href, title }: LinkProps) => {
  const isSelected = useIsPathSelected(href);

  return (
    <Link
      className={clsx(className, isSelected && 'active')}
      to={href}
      title={title}
    >
      {children}
    </Link>
  );
};

export default InternalLink;
