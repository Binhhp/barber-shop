import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
    </Switch>
  );
}

export default routes;
