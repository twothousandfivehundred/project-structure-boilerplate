export type RouteProps = {
  routeKey: string | number;
  title: string;
};

export type ExternalRoute = {
  path: string;
  title: string;
  target: '_self' | '_blank';
};

export type PublicRoute = {
  path: string;
  title: string;
  target?: '_self' | '_blank';
  isAuthenticated: false;
};

export type LazyRoute = React.LazyExoticComponent<
  (props: RouteProps) => JSX.Element
>;
