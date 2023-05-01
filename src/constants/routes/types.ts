export type RouteProps = {
  routeKey: string | number;
  title: string;
};

export type LazyRoute = React.LazyExoticComponent<
  (props: RouteProps) => JSX.Element
>;
