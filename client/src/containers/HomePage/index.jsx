import React from 'react';
import AboutUs from '../../components/AboutUs';
import CusterMaster from '../../components/CusterMaster';
import FindUs from '../../components/FindUs';
import Gallery from '../../components/Gallery';
import VideoHome from '../../components/VideoHome';
import Header from '../../components/Header';
import ServiceArea from '../../components/ServiceArea';
import { useEffect } from 'react';
import { fetchServices } from './action'
import { useDispatch, useSelector } from 'react-redux';
const HomePage = () => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.home.services)
  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchServices());
    }
  }, [services])
  return (
    <>
      <Header />
      <AboutUs />
      <ServiceArea services={services} />
      <Gallery />
      <VideoHome />
      <CusterMaster />
      <FindUs />
    </>
  );
};

export default HomePage;
