import React from 'react';
import Header from '../../components/Header';
import FormContact from './components/FormContact';
import MediaContact from './components/MediaContact';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header isHome={false} title='Contact Us' />

      <section className='contact-section'>
        <div className='container'>
          <div className='d-none d-sm-block mb-5 pb-4'>
            
          </div>
          <div className='row'>
            <div className='col-12'>
              <h2 className='contact-title'>Get in Touch</h2>
            </div>
            <div className='col-lg-8'>
              <FormContact />
            </div>
            <div className='col-lg-3 offset-lg-1'>
              <MediaContact />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
