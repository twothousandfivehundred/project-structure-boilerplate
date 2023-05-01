import { createUseStyles } from 'react-jss';
import typographyConstants from './constants';

export default createUseStyles(
  {
    typography: {
      '& strong': {
        fontWeight: 700,
      },
      '& em': {
        fontStyle: 'italic',
      },
    },
    'variant-body': {
      ...typographyConstants.body,
    },
    'variant-heading1': {
      ...typographyConstants.heading1,
    },
    'variant-heading3': {
      ...typographyConstants.heading3,
    },
    'variant-heading4': {
      ...typographyConstants.heading4,
    },
    'variant-heading5': {
      ...typographyConstants.heading5,
    },
    'variant-heading6': {
      ...typographyConstants.heading6,
    },
    'variant-footerLink': {
      ...typographyConstants.footerLink,
    },
    noMargin: {
      margin: 0,
    },
  },
  { name: 'typography' },
);
