/* eslint-disable react/jsx-props-no-spreading */
import { CSSProperties, useRef } from 'react';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { customiseSyntaxHighlighterStyles } from './logic';

const useSyntaxHighlighter = () => {
  const style = useRef<Record<string, CSSProperties>>(
    customiseSyntaxHighlighterStyles(monokaiSublime),
  );

  return {
    style: style.current,
  };
};

export default useSyntaxHighlighter;
