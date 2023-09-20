import { createUseStyles } from 'react-jss';
import typographyConstants from './constants';
import styling from '~/services/styling';

export default createUseStyles(
  {
    '@global': {
      ':root': {
        '--typographyScale': 1.2,
      },
      [styling.breakpoints.context.tabletUpString]: {
        ':root': {
          '--typographyScale': 1,
        },
      },
    },
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
    'variant-modalHeader': {
      ...typographyConstants.modalHeader,
    },
    'variant-siteBranding': {
      ...typographyConstants.siteBranding,
    },
    'variant-pageTitle': {
      ...typographyConstants.pageTitle,
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
