const transparent = 'rgba(0,0,0,0)';
const error = '#FC6969';

const primaryLight2 = '#333248';
const primaryLight1 = '#27253c';
const primary = '#201e36';
const primaryDark1 = '#191832';

const secondaryLight2 = '#f6e2d3';
const secondaryLight1 = '#fdf6f2';
const secondary = '#f7e2d3';
const secondaryDark1 = '#F3D7C2';

const imageTopGradient = `linear-gradient(to top, ${transparent} 0%, ${primaryDark1} 100%)`;
const imageBottomGradient = `linear-gradient(to bottom, ${transparent} 0%, ${primaryDark1} 100%)`;

const colors = {
  theme: {
    error,
    transparent,
    primaryLight2,
    primaryLight1,
    primary,
    primaryDark1,
    secondaryLight2,
    secondaryLight1,
    secondary,
    secondaryDark1,
  },
  context: {
    background: primaryDark1,
    color: secondary,
    inverted: {
      background: secondary,
      color: primaryDark1,
    },
    header: {
      background: primary,
      color: secondary,
    },
    footer: {
      background: secondary,
      color: primaryDark1,
    },
    modal: {
      background: secondary,
      color: primaryDark1,
      borderColor: primaryDark1,
    },
    images: {
      topGradient: imageTopGradient,
      bottomGradient: imageBottomGradient,
    },
  },
};

export default colors;
