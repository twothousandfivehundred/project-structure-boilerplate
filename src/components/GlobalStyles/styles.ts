import { createUseStyles } from 'react-jss';
import typographyConstants from '../Typography/constants';
import styling from '~/services/styling';

export default createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: 'calc(62.5% * var(--typographyScale, 1))',
      height: '-webkit-fill-available',
    },
    body: {
      ...typographyConstants.body,
      backgroundColor: styling.colors.context.background,
      color: styling.colors.context.color,
      minWidth: styling.sizes.context.columnW,
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
    a: {
      color: 'inherit',
    },
    p: {
      margin: 0,
    },
    ul: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
  },
});
