import { createUseStyles } from 'react-jss';
import styling from '../../services/styling';

export default createUseStyles(
  {
    container: {
      maxWidth: styling.sizes.context.container.maxWidth,
      marginInline: 'auto',
    },
  },
  {
    name: 'contentWrapper',
  },
);
