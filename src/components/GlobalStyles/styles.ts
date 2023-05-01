import { createUseStyles } from 'react-jss';
import styling from '../../services/styling';

export default createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '62.5%',
      height: '-webkit-fill-available',
    },
    body: {
      fontFamily: styling.fonts.sansSerif.fontFamily,
      fontWeight: styling.fonts.sansSerif.weights.regular,
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
