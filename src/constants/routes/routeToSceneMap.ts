import React from 'react';

const Contact = React.lazy(() => import('~/scenes/contact'));
const Home = React.lazy(() => import('~/scenes/home'));

const routeToSceneMap = {
  home: Home,
  contact: Contact,
};

export default routeToSceneMap;
