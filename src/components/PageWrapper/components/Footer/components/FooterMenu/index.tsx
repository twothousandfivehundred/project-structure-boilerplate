import Link from '~/components/Link';
import Typography from '~/components/Typography';
import useStyles from './styles';
import { FooterMenuProps } from './types';

const FooterMenu = ({ menuItems }: FooterMenuProps) => {
  const styles = useStyles();
  return (
    <ul>
      {menuItems.map(({ path, title }) => (
        <li key={path} className={styles.listItem}>
          <Typography as={Link} href={path} title={title} variant="footerLink">
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
