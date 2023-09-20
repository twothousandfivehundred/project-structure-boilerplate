/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { format } from 'prettier';
import * as prettierHtmlParser from 'prettier/parser-html';
import { StaticRouter } from 'react-router-dom/server';
import { DisplayRenderedOutputProps } from '../../types';

const useDisplayRenderedOutput = (
  children: DisplayRenderedOutputProps['children'],
) => {
  const [html, setHtml] = useState<string>('');

  const getHtml = useCallback(async () => {
    const prettyHtml = await format(
      renderToString(<StaticRouter location="/">{children}</StaticRouter>),
      {
        parser: 'html',
        plugins: [prettierHtmlParser],
        useTabs: false,
        trailingComma: 'all',
        singleQuote: true,
        arrowParens: 'always',
        proseWrap: 'always',
        jsxBracketSameLine: false,
        bracketSpacing: true,
      },
    );
    if (prettyHtml) {
      setHtml(prettyHtml);
    }
  }, [children]);

  useEffect(() => {
    getHtml();
  }, [getHtml]);

  return {
    html,
  };
};

export default useDisplayRenderedOutput;
