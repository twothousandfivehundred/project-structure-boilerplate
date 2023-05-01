import { PolymorphicComponentProps } from '../../types';

type ContentWrapperProps = React.PropsWithChildren<{
  className?: string;
}>;

export type PolymorphicContentWrapperProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, ContentWrapperProps>;
