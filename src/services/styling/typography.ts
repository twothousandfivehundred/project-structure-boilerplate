import { CSSProperties } from 'react';

import fonts from './fonts';

type FontFace = {
  fontFamily: string;
  weights: Record<string, number>;
  sizes: Record<string, CSSProperties>;
};

type Fonts<T extends Record<string, FontFace>> = {
  [K in keyof T]: {
    [W in keyof T[K]['weights']]: {
      [S in keyof T[K]['sizes']]: CSSProperties;
    };
  };
};

export function transformFonts<T extends Record<string, FontFace>>(
  fontFaces: T,
): Fonts<T> {
  return Object.entries(fontFaces).reduce((result, [fontName, fontFace]) => {
    const { fontFamily, weights, sizes } = fontFace;
    const cleanedFontName = fontName.replace(/['\s]/g, '');

    const fontWeights = Object.entries(weights).reduce(
      (weightResult, [weightName, fontWeight]) => {
        const fontSizes = Object.entries(sizes).reduce(
          (
            sizeResult,
            [sizeName, { fontSize, lineHeight, letterSpacing }],
          ) => ({
            ...sizeResult,
            [sizeName]: {
              fontFamily,
              fontWeight,
              fontSize,
              lineHeight,
              letterSpacing,
            },
          }),
          {} as Fonts<T>[typeof cleanedFontName][typeof weightName],
        );

        return {
          ...weightResult,
          [weightName]: fontSizes,
        };
      },
      {} as Fonts<T>[typeof cleanedFontName],
    );

    return {
      ...result,
      [cleanedFontName]: fontWeights,
    };
  }, {} as Fonts<T>);
}

const theme = transformFonts({
  sansSerif: fonts.theme.sansSerif,
});

export default {
  theme,
};
