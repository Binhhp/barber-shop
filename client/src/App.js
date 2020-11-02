import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FindUs from './components/FindUs';
import CusterMaster from './components/CusterMaster';
import AboutUs from './components/AboutUs';
import ServiceArea from './components/ServiceArea';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
// import Appointment from './containers/Appointment';
import { configStore, getHistory } from './containers/configurationStore';
import PublicRoutes from './containers/routes';
import ScrollToTop from './utils/ScrollToTop';
const store = configStore();
const history = getHistory();
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter>
              <ScrollToTop />
              <Switch>
                <PublicRoutes />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </ConnectedRouter>
      </Provider>
      {/* <Header />
      <AboutUs />
      <ServiceArea />
      <Gallery />
      <VideoHome />
      <CusterMaster />
      <FindUs />
      <Appointment /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
