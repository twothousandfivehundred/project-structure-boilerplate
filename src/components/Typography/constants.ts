import styling from '../../services/styling';

const body = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.regular,
  fontSize: '1.8rem',
  lineHeight: '3rem',
  [styling.breakpoints.context.tabletUpString]: {
    fontSize: '2.16rem',
    lineHeight: '2.73rem',
  },
};

const heading1 = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '4rem',
  lineHeight: '4.4rem',
  margin: 0,
  marginBottom: '1.82rem',
  textTransform: 'uppercase',
  letterSpacing: styling.fonts.utils.tracking(40, -50),
  [styling.breakpoints.context.tabletUpString]: {
    fontSize: '7.16rem',
    lineHeight: '8.95rem',
    letterSpacing: styling.fonts.utils.tracking(71.6, -50),
  },
};

const heading3 = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '3.5rem',
  lineHeight: '4.2rem',
  margin: 0,
  marginBottom: '1.82rem',
  textTransform: 'uppercase',
  letterSpacing: styling.fonts.utils.tracking(35, -25),
  [styling.breakpoints.context.tabletUpString]: {
    lineHeight: '3.9rem',
  },
};

const heading4 = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '1.8rem',
  lineHeight: '2rem',
  textTransform: 'uppercase',
  margin: 0,
  marginBottom: '2.4rem',
  letterSpacing: styling.fonts.utils.tracking(18, -25),
  [styling.breakpoints.context.tabletUpString]: {
    fontSize: '2.8rem',
    lineHeight: '3.5rem',
    letterSpacing: styling.fonts.utils.tracking(28, -25),
  },
};

const heading5 = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '1.8rem',
  lineHeight: '2rem',
  margin: 0,
  marginBottom: '2.4rem',
  letterSpacing: styling.fonts.utils.tracking(18, -25),
  [styling.breakpoints.context.tabletUpString]: {
    fontSize: '2.8rem',
    lineHeight: '3.5rem',
    letterSpacing: styling.fonts.utils.tracking(28, -25),
  },
};

const heading6 = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '2.5rem',
  lineHeight: '3rem',
  marginBottom: '1.9rem',
};

const footerLink = {
  fontFamily: styling.fonts.sansSerif.fontFamily,
  fontWeight: styling.fonts.sansSerif.weights.bold,
  fontSize: '1.8rem',
  lineHeight: '2.2rem',
  letterSpacing: styling.fonts.utils.tracking(18, -25),
  color: styling.colors.context.footer.color,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const typographyConstants = {
  body,
  heading1,
  heading3,
  heading4,
  heading5,
  heading6,
  footerLink,
};

export default typographyConstants;
