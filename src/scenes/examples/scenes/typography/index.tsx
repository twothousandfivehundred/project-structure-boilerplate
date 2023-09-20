import { memo } from 'react';
import SyntaxHighlighter from '~/components/DisplayRenderedOutput/components/SyntaxHighlighter';
import Stack from '~/components/Stack';
import useStyles from './styles';
import { typographyJSON, typographyConstantsJSON } from './constants';

const ExampleTypography = () => {
  const styles = useStyles();
  return (
    <Stack>
      <SyntaxHighlighter language="json">{typographyJSON}</SyntaxHighlighter>
      <SyntaxHighlighter language="json">
        {typographyConstantsJSON}
      </SyntaxHighlighter>
    </Stack>
  );
};

export default memo(ExampleTypography);
