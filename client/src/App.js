import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FindUs from './components/FindUs';
import CusterMaster from './components/CusterMaster';
import AboutUs from './components/AboutUs';
import ServiceArea from './components/ServiceArea';
import Gallery from './components/Gallery';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <CusterMaster />
      <ServiceArea />
      <Gallery />
      <FindUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
