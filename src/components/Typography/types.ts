import { PolymorphicComponentProps } from '~/types';
import typographyConstants from './constants';

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof typographyConstants;
  noMargin?: boolean;
};

export type PolymorphicTypographyProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, TypographyProps>;
