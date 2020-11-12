import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogPage from './index';
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={BlogPage} />
      <Route path='/page/:page' component={BlogPage} />
      <Route exact path='/tag/:tag' component={BlogPage} />
      <Route path='/tag/:tag/page/:page' component={BlogPage} />
      <Route exact path='/tag/:tag' component={BlogPage} />
      <Route path='/category/:category/page/:page' component={BlogPage} />
    </Switch>
  );
}

export default routes;
