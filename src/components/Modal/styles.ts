import { createUseStyles } from 'react-jss';
import styling from '../../services/styling';

export default createUseStyles(
  {
    container: {
      position: 'fixed',
      minWidth: styling.sizes.context.container.minWidth,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: styling.zIndex.modal,
      gridTemplateColumns: '1fr',
      cursor: 'pointer',
      width: [['unset'], '!important'],
      overflow: 'auto',
      padding: styling.sizes.context.guttering,
      [styling.breakpoints.context.tabletUpString]: {
        padding: [
          100,
          styling.sizes.context.guttering,
          styling.sizes.context.guttering,
        ],
      },
    },
    containerRequired: {
      cursor: 'default',
    },
  },
  { name: 'modal' },
);
