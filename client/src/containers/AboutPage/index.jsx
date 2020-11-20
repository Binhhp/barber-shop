import React from 'react';
import AboutUs from '../../components/AboutUs';
import CusterMaster from '../../components/CusterMaster';
import FindUs from '../../components/FindUs';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import VideoHome from '../../components/VideoHome';

const AboutPage = () => {
  return (
    <>
      <Header isHome={false} title='About Us' />
      <AboutUs />
      {/* <Gallery /> */}
      <VideoHome />
      <CusterMaster />
      <FindUs />
    </>
  );
};

export default AboutPage;
