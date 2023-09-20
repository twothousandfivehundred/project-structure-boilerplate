import PageWrapper from '~/components/PageWrapper';
import { RouteProps } from '~/constants/routes/types';
import may from '~/assets/images/page-heros/may.jpeg';
import useStyles from './styles';
import Typography from '~/components/Typography';

const Home = ({ routeKey, title }: RouteProps) => {
  const styles = useStyles();
  return (
    <PageWrapper>
      <div>
        <Typography as="h1" variant="pageTitle">
          {title}
        </Typography>
        <img className={styles.image} src={may} alt="May the 4th be with you" />
      </div>
    </PageWrapper>
  );
};

export default Home;
