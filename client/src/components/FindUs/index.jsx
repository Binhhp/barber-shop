import React from 'react';
import './styles.scss';
const FindUs = () => {
  return (
    <React.Fragment>
      {/* find_us_area start */}
      <div className='find_us_area find_bg_1 '>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 offset-xl-7 col-lg-6 offset-lg-6'>
              <div className='find_info'>
                <h3 className='find_info_title'>How to Find Us</h3>
                <div className='single_find d-flex'>
                  <div className='icon'>
                    <i className='flaticon-placeholder' />
                  </div>
                  <div className='find_text'>
                    <h3>Location</h3>
                    <p>200, A-block, Green road, USA</p>
                  </div>
                </div>
                <div className='single_find d-flex'>
                  <div className='icon'>
                    <i className='flaticon-phone-call' />
                  </div>
                  <div className='find_text'>
                    <h3>Call Us</h3>
                    <p>+10 378 478 2789</p>
                  </div>
                </div>
                <div className='single_find d-flex'>
                  <div className='icon'>
                    <i className='flaticon-paper-plane' />
                  </div>
                  <div className='find_text'>
                    <h3>Mail Us</h3>
                    <p>contact@barbershop.com</p>
                  </div>
                </div>
                <div className='single_find'>
                  <div className='book_btn'>
                    <a className='popup-with-form' href='#test-form'>
                      Make an Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* find_us_area_end */}
    </React.Fragment>
  );
};

export default FindUs;
