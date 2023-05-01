import useNormalizeStyles from './stylesNormalize';
import useStyles from './styles';

const GlobalStyles = () => {
  useNormalizeStyles();
  useStyles();

  return null;
};

export default GlobalStyles;
