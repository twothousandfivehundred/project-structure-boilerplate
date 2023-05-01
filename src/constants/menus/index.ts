import routes from '../routes';
import externalRoutes from '../routes/external';
import { MenuItem } from './types';

export const mainMenu: MenuItem[] = [routes.home, routes.contact];

export const footerMenu: MenuItem[] = [
  routes.home,
  routes.contact,
  externalRoutes.facebook,
  externalRoutes.instagram,
];

export const socialsMenu: MenuItem[] = [
  externalRoutes.facebook,
  externalRoutes.instagram,
  externalRoutes.linkedIn,
  externalRoutes.twitter,
];
