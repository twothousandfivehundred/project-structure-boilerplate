/* eslint-disable react/jsx-props-no-spreading */
import PageWrapper from '~/components/PageWrapper';
import Panel from '~/components/Panel';
import { RouteProps } from '~/constants/routes/types';
import useExamples from './hooks/useExamples';
import ExamplesMenu from './components/ExamplesMenu';
import Stack from '~/components/Stack';
import Divider from '~/components/Divider';
import RefreshSubComponent from './components/RefreshSubComponent';
import Typography from '~/components/Typography';

const Examples = ({ routeKey, title }: RouteProps) => {
  const { SubComponent, renderCount, updateSubComponentRenderCount } =
    useExamples();
  return (
    <PageWrapper>
      <Stack>
        <Typography as="h1" variant="pageTitle">
          {title}
        </Typography>
        <Panel>
          <ExamplesMenu />
          {SubComponent && (
            <>
              <Divider />
              <SubComponent key={renderCount} />
              <RefreshSubComponent onClick={updateSubComponentRenderCount} />
            </>
          )}
        </Panel>
      </Stack>
    </PageWrapper>
  );
};

export default Examples;
