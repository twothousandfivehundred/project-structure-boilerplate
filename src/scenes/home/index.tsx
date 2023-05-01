import PageWrapper from '../../components/PageWrapper';
import { RouteProps } from '../../constants/routes/types';
import may from '../../assets/images/page-heros/may.jpeg';
import useStyles from './styles';

const Home = ({ routeKey, title }: RouteProps) => {
  const styles = useStyles();
  return (
    <PageWrapper>
      <div>
        {routeKey} - {title}
        <img className={styles.image} src={may} alt="May the 4th be with you" />
      </div>
    </PageWrapper>
  );
};

export default Home;
