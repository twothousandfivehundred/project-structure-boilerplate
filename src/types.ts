type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<
  C extends React.ElementType,
  ComponentProps = Record<string, unknown>,
> = ComponentProps &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, ComponentProps>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  ComponentProps = Record<string, unknown>,
> = PolymorphicComponentProps<C, ComponentProps> & {
  ref?: PolymorphicRef<C>;
};
