import styling from '~/services/styling';

const body = {
  ...styling.typography.theme.sansSerif.regular.xs,
};

const heading1 = {
  ...styling.typography.theme.sansSerif.bold['4xl'],
  marginBottom: '1.82rem',
  textTransform: 'uppercase',
};

const heading3 = {
  ...styling.typography.theme.sansSerif.bold['2xl'],
  marginBottom: '1.82rem',
  textTransform: 'uppercase',
};

const heading4 = {
  ...styling.typography.theme.sansSerif.bold.xl,
  textTransform: 'uppercase',
  marginBottom: '2.4rem',
};

const heading5 = {
  ...styling.typography.theme.sansSerif.bold.lg,
  marginBottom: '2.4rem',
};

const heading6 = {
  ...styling.typography.theme.sansSerif.bold.md,
  marginBottom: '1.9rem',
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
  heading1,
  heading3,
  heading4,
  heading5,
  heading6,
  footerLink,
};

export default typographyConstants;
