import { constructPublicRoute } from './helpers';

const routes = {
  home: constructPublicRoute('/', 'Home'),
  contact: constructPublicRoute('/contact', 'Contact'),
  examples: constructPublicRoute('/examples', 'Examples'),
  examplesExample: constructPublicRoute('/examples/:exampleSlug', 'Example'),
};

export default routes;
