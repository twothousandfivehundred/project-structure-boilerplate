import { memo } from 'react';
import ProgressExampleYucky from './components/ProgressExampleYucky';
import ProgressExample from './components/ProgressExample';
import useProgress from './hooks/useProgress';
import DisplayRenderedOutput from '~/components/DisplayRenderedOutput';

const ExampleProgress = () => {
  const { progress } = useProgress();
  return (
    <DisplayRenderedOutput>
      <ProgressExampleYucky progress={progress} />
      {/* <ProgressExample progress={progress} /> */}
    </DisplayRenderedOutput>
  );
};

export default memo(ExampleProgress);
