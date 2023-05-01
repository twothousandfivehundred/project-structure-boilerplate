import ContentWrapper from '../ContentWrapper';
import Typography from '../Typography';
import Footer from './components/Footer';
import Header from './components/Header';
import useStyles from './styles';
import { PageWrapperProps } from './types';

const PageWrapper = ({ children }: PageWrapperProps) => {
  const styles = useStyles();

  return (
    <Typography as="section" variant="body">
      <Header />
      <ContentWrapper as="main" className={styles.main}>
        {children}
      </ContentWrapper>
      <Footer />
    </Typography>
  );
};

export default PageWrapper;
