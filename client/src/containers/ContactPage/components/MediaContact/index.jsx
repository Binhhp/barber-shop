import React from 'react';

const MediaContact = () => {
  return (
    <>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-home' />
        </span>
        <div className='media-body'>
          <h3>Buttonwood, California.</h3>
          <p>Rosemead, CA 91770</p>
        </div>
      </div>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-tablet' />
        </span>
        <div className='media-body'>
          <h3>+1 253 565 2365</h3>
          <p>Mon to Fri 9am to 6pm</p>
        </div>
      </div>
      <div className='media contact-info'>
        <span className='contact-info__icon'>
          <i className='ti-email' />
        </span>
        <div className='media-body'>
          <h3>support@colorlib.com</h3>
          <p>Send us your query anytime!</p>
        </div>
      </div>
    </>
  );
};

export default MediaContact;
