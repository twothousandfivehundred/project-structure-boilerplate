const px = (num: number | number[]): string => {
  if (typeof num === 'number') {
    return `${num}px`;
  }
  return num.map((val: number) => px(val)).join(' ');
};

const containerQuery = (
  direction: 'width' | 'height',
  min: number,
  max?: number,
) =>
  `@container ((min-${direction}: ${px(min)})${
    max ? ` and (max-${direction}: ${px(max)}))` : ')'
  }`;

const absoluteFull = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const userDrag = (value = 'none') => ({
  WebkitUserDrag: value,
  KhtmlUserDrag: value,
  MozUserDrag: value,
  OUserDrag: value,
  userDrag: value,
});

export default {
  absoluteFull,
  containerQuery,
  px,
  userDrag,
};
