/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { DisplayRenderedOutputProps } from './types';
import useDisplayRenderedOutput from './hooks/useDisplayRenderedOutput';
import Stack from '../Stack';
import SyntaxHighlighter from './components/SyntaxHighlighter';

const DisplayRenderedOutput = ({ children }: DisplayRenderedOutputProps) => {
  const { html } = useDisplayRenderedOutput(children);
  return (
    <Stack>
      {children}
      <SyntaxHighlighter>{html}</SyntaxHighlighter>
    </Stack>
  );
};

export default memo(DisplayRenderedOutput);
