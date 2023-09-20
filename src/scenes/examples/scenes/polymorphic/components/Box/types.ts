import { PolymorphicComponentProps } from '~/types';

type BoxProps = {
  children: React.ReactNode;
};

export type PolymorphicBoxProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, BoxProps>;
