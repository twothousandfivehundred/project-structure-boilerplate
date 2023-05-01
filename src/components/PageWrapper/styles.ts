import { createUseStyles } from 'react-jss';
import styling from '../../services/styling';

export default createUseStyles(
  {
    main: {
      paddingInline: styling.sizes.context.guttering,
      paddingBlock: [
        [styling.sizes.context.guttering, styling.sizes.context.guttering * 2],
      ],
    },
  },
  {
    name: 'pageWrapper',
  },
);
