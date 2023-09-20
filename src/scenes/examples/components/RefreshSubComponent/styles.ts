import { createUseStyles } from 'react-jss';
import styling from '~/services/styling';

export default createUseStyles(
  {
    container: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: styling.colors.theme.secondary,
    },
  },
  { name: 'refreshSubComponent' },
);
