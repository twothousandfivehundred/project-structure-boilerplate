import React from 'react';

const Contact = React.lazy(() => import('~/scenes/contact'));
const Home = React.lazy(() => import('~/scenes/home'));
const Examples = React.lazy(() => import('~/scenes/examples'));

const routeToSceneMap = {
  home: Home,
  contact: Contact,
  examples: Examples,
  examplesExample: Examples,
};

export default routeToSceneMap;
