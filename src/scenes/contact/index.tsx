import PageWrapper from '~/components/PageWrapper';
import { RouteProps } from '~/constants/routes/types';
import helloThere from '~/assets/images/page-heros/hellotherethumb.webp';
import useStyles from './styles';
import Typography from '~/components/Typography';

const Contact = ({ routeKey, title }: RouteProps) => {
  const styles = useStyles();
  return (
    <PageWrapper>
      <div>
        <Typography as="h1" variant="pageTitle">
          {title}
        </Typography>
        <img className={styles.image} src={helloThere} alt="Hello there" />
      </div>
    </PageWrapper>
  );
};

export default Contact;
