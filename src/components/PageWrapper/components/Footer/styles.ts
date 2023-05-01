import { createUseStyles } from 'react-jss';
import styling from '../../../../services/styling';

export default createUseStyles(
  {
    container: {
      background: styling.colors.context.footer.background,
      color: styling.colors.context.footer.color,
      padding: [60, 30],
      gap: styling.sizes.context.guttering,
      display: 'flex',
      flexDirection: 'column',
      [styling.breakpoints.context.tabletUpString]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    },
  },
  {
    name: 'footer',
  },
);
