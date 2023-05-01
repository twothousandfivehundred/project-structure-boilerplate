import clsx from 'clsx';

import { footerMenu, socialsMenu } from '../../../../constants/menus';
import useStyles from './styles';
import { FooterProps } from './types';
import FooterMenu from './components/FooterMenu';

const Footer = ({ className }: FooterProps) => {
  const styles = useStyles();

  return (
    <footer className={clsx(className, styles.container)}>
      <FooterMenu menuItems={footerMenu} />
      <FooterMenu menuItems={socialsMenu} />
    </footer>
  );
};

export default Footer;
