import { createUseStyles } from 'react-jss';
import styling from '../../../../services/styling';

export default createUseStyles(
  {
    modal: {
      cursor: 'default',
      width: '100%',
      position: 'relative',
      maxWidth: styling.sizes.context.modal.maxWidth,
      borderRadius: styling.sizes.context.modal.radius,
      margin: [0, 'auto'],
      background: styling.colors.context.modal.background,
      color: styling.colors.context.modal.color,
      boxSizing: 'border-box',
      border: [1, 'solid', styling.colors.context.modal.borderColor],
    },
    content: {
      position: 'relative',
      zIndex: 2,
      padding: [52, 40, 47],
      textAlign: 'center',
      maxWidth: 630,
      margin: [0, 'auto'],
    },
    title: {
      marginBottom: 20,
    },
  },
  { name: 'defaultModalContent' },
);
