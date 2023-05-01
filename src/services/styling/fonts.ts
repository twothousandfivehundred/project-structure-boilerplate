const sansSerif = {
  fontFamily: 'Helvetica, Arial, Verdana, sans-serif',
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

// https://helpx.adobe.com/au/indesign/using/kerning-tracking.html#:~:text=Kerning%20is%20the%20process%20of,tightening%20a%20block%20of%20text.
const tracking = (basePx: number, trackingValue: number) =>
  (trackingValue / 1000) * basePx;

export default {
  sansSerif,
  utils: {
    tracking,
  },
};
