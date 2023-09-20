import { CSSProperties } from 'react';

export const customiseSyntaxHighlighterStyles = (
  style: Record<string, CSSProperties>,
) => ({
  ...style,
  hljs: {
    ...style?.hljs,
    width: '100%',
  },
});
