import React from 'react';

const MediaContact = () => {
  return (
    <>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-home' />
        </span>
        <div className='media-body'>
          <h3>Lang Thuong, Đong Đa Ha Noi </h3>
          <p>99 Nguyen Chi Thanh,</p>
        </div>
      </div>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-tablet' />
        </span>
        <div className='media-body'>
          <h3>+084 393 837 623</h3>
          <p>Mon to Fri 8am to 6pm</p>
        </div>
      </div>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-email' />
        </span>
        <div className='media-body'>
          <h3>shopbarber346@gmail.com</h3>
          <p>Send us your query anytime!</p>
        </div>
      </div>
    </>
  );
};

export default MediaContact;
