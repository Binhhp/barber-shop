import React from 'react';
import AboutUs from '../../components/AboutUs';
import CusterMaster from '../../components/CusterMaster';
import FindUs from '../../components/FindUs';
import Gallery from '../../components/Gallery';
import VideoHome from '../../components/VideoHome';
import Header from '../../components/Header';
import ServiceArea from '../../components/ServiceArea';

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <ServiceArea />
      <Gallery />
      <VideoHome />
      <CusterMaster />
      <FindUs />
    </>
  );
};

export default HomePage;
