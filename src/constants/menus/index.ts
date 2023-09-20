import routes from '../routes';
import externalRoutes from '../routes/external';
import { MenuItem } from './types';

export const mainMenu: MenuItem[] = [
  routes.home,
  routes.contact,
  routes.examples,
];

export const footerMenu: MenuItem[] = [
  routes.home,
  routes.contact,
  routes.examples,
];

export const socialsMenu: MenuItem[] = [
  externalRoutes.facebook,
  externalRoutes.instagram,
  externalRoutes.linkedIn,
  externalRoutes.twitter,
];
