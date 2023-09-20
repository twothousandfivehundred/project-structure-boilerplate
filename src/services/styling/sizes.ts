const columnW = 300;
const guttering = 32;
const spacing = {
  '3xs': 6,
  '2xs': 12,
  xs: 18,
  sm: 24,
  md: 36,
  lg: 40,
  xl: 72,
  '2xl': 90,
};

const topBarH = 90;

const iconSizeSm = 19;
const iconSizeMd = 24;
const iconSizeLg = 32;

const columns = (
  cols: number,
  gutteringWidth: number,
  includeEdgeGutters = false,
) =>
  columnW * cols +
  (cols - 1) * gutteringWidth +
  (includeEdgeGutters ? 2 * gutteringWidth : 0);

export default {
  theme: {
    spacing,
  },
  context: {
    container: {
      minWidth: columns(1, guttering),
      maxWidth: columns(3, guttering),
    },
    topBar: {
      height: topBarH,
    },
    columnW,
    guttering,
    icon: {
      sm: iconSizeSm,
      md: iconSizeMd,
      lg: iconSizeLg,
    },
    panel: {
      radius: 12,
    },
    modal: {
      maxWidth: 972,
      radius: 12,
    },
  },
  utils: {
    columns,
  },
};
