import { createUseStyles } from 'react-jss';
import styling from '~/services/styling';

export default createUseStyles(
  {
    container: {
      display: 'flex',
      width: '100%',
    },
    'align-start': {
      alignItems: 'start',
    },
    'align-end': {
      alignItems: 'end',
    },
    'align-center': {
      alignItems: 'center',
    },
    'align-stretch': {
      alignItems: 'stretch',
    },
    'justify-start': {
      justifyContent: 'start',
    },
    'justify-end': {
      justifyContent: 'end',
    },
    'justify-center': {
      justifyContent: 'center',
    },
    'justify-around': {
      justifyContent: 'space-around',
    },
    'justify-between': {
      justifyContent: 'space-between',
    },
    'justify-evenly': {
      justifyContent: 'space-evenly',
    },
    'direction-row': {
      flexDirection: 'row',
    },
    'direction-column': {
      flexDirection: 'column',
    },
    'spacing-3xs': {
      gap: styling.sizes.theme.spacing['3xs'],
    },
    'spacing-2xs': {
      gap: styling.sizes.theme.spacing['2xs'],
    },
    'spacing-xs': {
      gap: styling.sizes.theme.spacing.xs,
    },
    'spacing-sm': {
      gap: styling.sizes.theme.spacing.sm,
    },
    'spacing-md': {
      gap: styling.sizes.theme.spacing.md,
    },
    'spacing-lg': {
      gap: styling.sizes.theme.spacing.lg,
    },
    'spacing-xl': {
      gap: styling.sizes.theme.spacing.xl,
    },
    'spacing-2xl': {
      gap: styling.sizes.theme.spacing['2xl'],
    },
  },
  { name: 'stack' },
);
