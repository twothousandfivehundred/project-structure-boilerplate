import React, { Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Entries } from 'type-fest';

import routeSceneMap from './routeToSceneMap';
import routes from '.';
import { LazyRoute } from './types';
import FourOhFour from '../../scenes/404';

const getRouteElement = (
  routeKey: keyof typeof routes,
  title: string,
): React.ReactNode => {
  const Component: LazyRoute | null = routeSceneMap?.[routeKey] || null;

  if (Component) {
    return React.createElement(
      Suspense,
      { fallback: 'LOADING...' },
      React.createElement(Component, { routeKey, title }),
    );
  }
  return React.createElement(FourOhFour);
};

const router = createBrowserRouter([
  ...(Object.entries(routes) as Entries<typeof routes>).map(
    ([routeKey, route]) =>
      ({
        path: route.path,
        element: getRouteElement(routeKey, route.title),
      } as RouteObject),
  ),
]);

export default router;
