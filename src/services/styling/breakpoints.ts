import sizes from './sizes';

const breakpoints = {
  xs: 0,
  sm: sizes.utils.columns(2, sizes.context.guttering, true),
  md: sizes.utils.columns(3, sizes.context.guttering, true),
  lg: sizes.utils.columns(4, sizes.context.guttering, true),
  xl: sizes.utils.columns(5, sizes.context.guttering, true),
};

const getValueForKey = (key: keyof typeof breakpoints) => {
  if (breakpoints[key] !== undefined) {
    return breakpoints[key];
  }
  throw new Error(`[breakpoints] key not found: ${key}`);
};

const up = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${getValueForKey(key)}px)`;

const down = (key: keyof typeof breakpoints) =>
  `@media (max-width: ${getValueForKey(key)}px)`;

export default {
  theme: breakpoints,
  context: {
    tabletUpString: up('sm'),
    desktopUpString: up('md'),
    largeUpString: up('lg'),
    extraLargeUpString: up('xl'),
  },
};
