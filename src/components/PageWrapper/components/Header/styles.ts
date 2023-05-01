import { createUseStyles } from 'react-jss';
import styling from '../../../../services/styling';

export default createUseStyles(
  {
    container: {
      height: styling.sizes.context.topBar.height,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: styling.zIndex.fixedTopBar,
      background: styling.colors.context.header.background,
      color: styling.colors.context.header.color,
      display: 'flex',
      alignItems: 'center',
      borderBottom: [1, 'solid', styling.colors.theme.primaryLight1],
    },
    content: {
      display: 'flex',
      gap: styling.sizes.context.guttering,
      alignItems: 'center',
      width: '100%',
    },
    spacer: {
      height: styling.sizes.context.topBar.height,
      pointerEvents: 'none',
    },
  },
  {
    name: 'header',
  },
);
