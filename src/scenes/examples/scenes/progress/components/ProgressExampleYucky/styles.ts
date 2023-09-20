import { createUseStyles } from 'react-jss';
import { ProgressExampleYuckyProps } from './types';
import styling from '~/services/styling';

export default createUseStyles(
  {
    containerSimpleStyle: {
      height: 5,
      background: styling.colors.theme.secondaryLight1,
      width: '100%', // <-- we want to change this value
    },
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    containerPropertyDynamicStyle: {
      height: 5,
      background: styling.colors.theme.secondaryLight1,
      width: ({ progress }: ProgressExampleYuckyProps) => `${progress}%`,
    },
    containerWholeDynamicStyle: ({ progress }: ProgressExampleYuckyProps) => ({
      height: 5,
      background: styling.colors.theme.secondaryLight1,
      width: `${progress}%`,
    }),
  },
  { name: 'progressExampleYucky' },
);
