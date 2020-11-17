import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import BlogRoutes from './BlogPage/routes'
const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));
const AppointmentPage = React.lazy(() => import('./Appointment'));
const HistoryAppointmentPage = React.lazy(() => import('./HistoryAppointment'));

function routes() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route path='/blog' component={BlogRoutes} />
      <Route exact path='/appointment' component={AppointmentPage} />
      <Route exact path='/history' component={HistoryAppointmentPage} />
    </Switch>
  );
}

export default routes;
