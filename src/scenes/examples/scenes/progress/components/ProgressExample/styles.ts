import { createUseStyles } from 'react-jss';
import styling from '~/services/styling';

export default createUseStyles(
  {
    container: {
      height: 5,
      background: styling.colors.theme.secondaryLight1,
      width: 'var(--progressExampleWidthPercentage, 0)',
    },
  },
  { name: 'progressExample' },
);
