const sansSerif = {
  fontFamily: 'Helvetica, Arial, Verdana, sans-serif',
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    '4xl': {
      fontSize: '7.2rem',
      lineHeight: '8rem',
      letterSpacing: '-0.03em',
    },
    '3xl': {
      fontSize: '5.4rem',
      lineHeight: '7.6rem',
      letterSpacing: '-0.03em',
    },
    '2xl': {
      fontSize: '3.5rem',
      lineHeight: '4.9rem',
      letterSpacing: '-0.03em',
    },
    xl: {
      fontSize: '3.2rem',
      lineHeight: '4rem',
      letterSpacing: '-0.03em',
    },
    lg: {
      fontSize: '2.8rem',
      lineHeight: '3.9rem',
      letterSpacing: '-0.03em',
    },
    md: {
      fontSize: '2.4rem',
      lineHeight: '3.7rem',
      letterSpacing: '-0.03em',
    },
    sm: {
      fontSize: '2.1rem',
      lineHeight: '2.9rem',
      letterSpacing: '-0.03em',
    },
    xs: {
      fontSize: '1.8rem',
      lineHeight: '2.5rem',
      letterSpacing: '-0.03em',
    },
    '2xs': {
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
      letterSpacing: '-0.03em',
    },
    '3xs': {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      letterSpacing: '-0.03em',
    },
  },
} as const;

// https://helpx.adobe.com/au/indesign/using/kerning-tracking.html#:~:text=Kerning%20is%20the%20process%20of,tightening%20a%20block%20of%20text.
const tracking = (basePx: number, trackingValue: number) =>
  (trackingValue / 1000) * basePx;

export default {
  theme: {
    sansSerif,
  },
  utils: {
    tracking,
  },
};
