import { createUseStyles } from 'react-jss';
import styling from '~/services/styling';

export default createUseStyles(
  {
    divider: {
      margin: [styling.sizes.theme.spacing.sm, 'auto'],
      width: '100%',
      height: 1,
      position: 'relative',
      backgroundColor: styling.colors.theme.secondary,
    },
    subtle: {
      opacity: 0.2,
    },
  },
  { name: 'divider' },
);
