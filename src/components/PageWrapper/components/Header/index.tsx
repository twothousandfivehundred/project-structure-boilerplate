import useMediaQuery from '~/hooks/useMediaQuery';
import styling from '~/services/styling';
import ContentWrapper from '~/components/ContentWrapper';
import Typography from '~/components/Typography';

// import useMediaQuery from '~/hooks/useMediaQuery';
// import styling from '~/services/styling';
// import ContentWrapper from '~/components/ContentWrapper';
// import Typography from '~/components/Typography';
import TTFHBrand from './components/TTFHBrand';
import useStyles from './styles';

const Header = () => {
  const isDesktop = useMediaQuery(styling.breakpoints.context.desktopUpString);
  const styles = useStyles();

  return (
    <>
      <header className={styles.container}>
        <ContentWrapper className={styles.content}>
          {isDesktop && <TTFHBrand />}
          <Typography as="h1" noMargin variant="heading3">
            Project Structure Boilerplate
          </Typography>
        </ContentWrapper>
      </header>
      <div className={styles.spacer} />
    </>
  );
};

export default Header;
