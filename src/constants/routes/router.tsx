import React, { Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Entries } from 'type-fest';

import routeSceneMap from './routeToSceneMap';
import routes from '.';
import { LazyRoute } from './types';
import Root from '~/scenes/_root';

const FourOhFour = React.lazy(() => import('~/scenes/404'));

const getRouteElement = (
  routeKey: keyof typeof routes,
  title: string,
): React.ReactNode => {
  const Component: LazyRoute = routeSceneMap?.[routeKey] || FourOhFour;

  return (
    <Suspense fallback="LOADING...">
      <Component routeKey={routeKey} title={title} />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      ...(Object.entries(routes) as Entries<typeof routes>).map(
        ([routeKey, route]) =>
          ({
            path: route.path,
            element: getRouteElement(routeKey, route.title),
          } as RouteObject),
      ),
    ],
  },
]);

export default router;
