const columnW = 300;
const guttering = 32;

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
    modal: {
      maxWidth: 972,
      radius: 12,
    },
  },
  utils: {
    columns,
  },
};
