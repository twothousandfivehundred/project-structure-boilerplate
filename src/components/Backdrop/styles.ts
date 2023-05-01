import { createUseStyles } from 'react-jss';
import styling from '../../services/styling';

export default createUseStyles(
  {
    backdrop: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: styling.colors.context.background,
      opacity: 0.9,
      mixBlendMode: 'multiply',
    },
    'variant-modal': {
      zIndex: styling.zIndex.backdrops.modal,
    },
    backdropOnClick: {
      cursor: 'pointer',
    },
  },
  { name: 'backdrop' },
);
