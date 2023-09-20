import styling from '~/services/styling';

const body = {
  ...styling.typography.theme.sansSerif.regular.xs,
};

const siteBranding = {
  ...styling.typography.theme.sansSerif.bold['2xl'],
  marginBottom: '1.82rem',
  textTransform: 'uppercase',
};

const modalHeader = {
  ...styling.typography.theme.sansSerif.bold.xl,
  textTransform: 'uppercase',
  marginBottom: '2.4rem',
};

const pageTitle = {
  ...styling.typography.theme.sansSerif.bold['2xl'],
  marginBottom: '1.82rem',
};

const footerLink = {
  ...styling.typography.theme.sansSerif.bold.sm,
  color: styling.colors.context.footer.color,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const typographyConstants = {
  body,
  siteBranding,
  modalHeader,
  pageTitle,
  footerLink,
} as const;

export default typographyConstants;
