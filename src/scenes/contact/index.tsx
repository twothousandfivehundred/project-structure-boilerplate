import PageWrapper from '../../components/PageWrapper';
import { RouteProps } from '../../constants/routes/types';
import helloThere from '../../assets/images/page-heros/hellotherethumb.webp';
import useStyles from './styles';

const Contact = ({ routeKey, title }: RouteProps) => {
  const styles = useStyles();
  return (
    <PageWrapper>
      <div>
        {routeKey} - {title}
        <img className={styles.image} src={helloThere} alt="Hello there" />
      </div>
    </PageWrapper>
  );
};

export default Contact;
