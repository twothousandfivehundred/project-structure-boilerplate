import styling from '~/services/styling';
import { PolymorphicComponentProps } from '~/types';

export type StackProps = {
  className?: string;
  children: React.ReactNode;
  spacing?: keyof typeof styling.sizes.theme.spacing;
  direction?: 'row' | 'column';
  align?: 'start' | 'end' | 'center' | 'stretch';
  justify?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
};

export type PolymorphicStackProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, StackProps>;
