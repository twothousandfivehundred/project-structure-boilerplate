import { generatePath } from 'react-router-dom';

import { PublicRoute } from './types';

export const interpolateRoutePath = (
  route: PublicRoute,
  interpolationParams: { [key: string]: string },
): string => generatePath(route.path, interpolationParams);

export const constructPublicRoute = (
  path: string,
  title: string,
): PublicRoute => ({
  path,
  title,
  isAuthenticated: false,
});
