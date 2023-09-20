import { memo } from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import useSyntaxHighlighter from './hooks/useSyntaxHighlighter';
import { SyntaxHighlighterProps } from './types';

const SyntaxHighlighter = ({
  children,
  language = 'xml',
}: SyntaxHighlighterProps) => {
  const { style } = useSyntaxHighlighter();
  return (
    <ReactSyntaxHighlighter language={language} style={style} wrapLongLines>
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default memo(SyntaxHighlighter);
