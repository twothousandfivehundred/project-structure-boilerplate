import { LinkProps } from '../../types';

export const getIsExternalLink = (href: string) => {
  const externalUrlRegex = /^(https?):?\/\/.+/;
  return externalUrlRegex.test(href);
};

export const getComponentFromHref = <C>(
  href: LinkProps['href'],
  externalComponent: C,
  internalComponent: C,
): C => {
  const isExternalLink = getIsExternalLink(href);
  if (isExternalLink) {
    return externalComponent;
  }
  return internalComponent;
};
