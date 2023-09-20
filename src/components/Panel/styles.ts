import { createUseStyles } from 'react-jss';
import styling from '~/services/styling';

export default createUseStyles(
  {
    container: {
      position: 'relative',
      width: '100%',
      padding: styling.sizes.theme.spacing.md,
      borderRadius: styling.sizes.context.panel.radius,
      border: [1, 'solid', styling.colors.theme.secondaryLight2],
    },
  },
  { name: 'panel' },
);
