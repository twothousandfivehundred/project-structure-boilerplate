import { LinkProps } from '../../types';

const ExternalLink = ({ className, children, href, title }: LinkProps) => (
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

export default ExternalLink;
