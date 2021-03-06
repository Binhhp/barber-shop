import React from 'react';
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import BlogPage from './index';
import BlogDetail from './components/BlogDetail'
function BlogRoutes() {
  let { path, url } = useRouteMatch();
  // console.log(path, path, 'pathpathpathpathpath')
  return (
    <Switch>
      <Route exact path={`${path}`} component={BlogPage} />
      <Route exact path={`${path}/:id`} component={BlogDetail} />
      <Route path={`${path}/page/:pageId`} component={BlogPage} />
      <Route exact path={`${path}/tag/:tagId`} component={BlogPage} />
      <Route path={`${path}/tag/:tagId/page/:pageId`} component={BlogPage} />
      <Route exact path={`${path}/key/:keySearch`} component={BlogPage} />
      <Route path={`${path}/key/:keySearch/page/:pageId`} component={BlogPage} />
      <Route exact path={`${path}/category/:categoryId`} component={BlogPage} />
      <Route path={`${path}/category/:categoryId/page/:pageId`} component={BlogPage} />
    </Switch>
  );
}

export default BlogRoutes;
