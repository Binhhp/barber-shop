import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));
const BlogPage = React.lazy(() => import('./BlogPage'));
const AppointmentPage = React.lazy(() => import('./Appointment'));
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/blog' component={BlogPage} />
      <Route exact path='/appointment' component={AppointmentPage} />
    </Switch>
  );
}

export default routes;