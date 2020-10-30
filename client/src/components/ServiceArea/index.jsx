import React from 'react';
import service1 from '../../assets/img/service/1.png';
import service2 from '../../assets/img/service/2.png';
import service3 from '../../assets/img/service/3.png';
import service4 from '../../assets/img/service/4.png';
import service5 from '../../assets/img/service/5.png';
import service6 from '../../assets/img/service/6.png';
import service7 from '../../assets/img/service/7.png';
import service8 from '../../assets/img/service/8.png';
import service9 from '../../assets/img/service/9.png';
import service10 from '../../assets/img/service/10.png';
import './styles.scss';
const ServiceArea = () => {
  return (
    <>
      {/* about_area_end */}
      <div className='service_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title2 text-center mb-90'>
                <i className='flaticon-scissors' />
                <h3>our service</h3>
              </div>
            </div>
          </div>
          <div className='white_bg_pos'>
            <div className='row'>
              <div className='col-xl-6'>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service1} alt='' />
                    </div>
                    <span>Men’s Facial</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service2} alt='' />
                    </div>
                    <span>Clean Cut</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service3} alt='' />
                    </div>
                    <span>Close Shave</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service4} alt='' />
                    </div>
                    <span>Razor Cut</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service5} alt='' />
                    </div>
                    <span>Face Massage</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
              </div>
              <div className='col-xl-6'>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service6} alt='' />
                    </div>
                    <span>Classic haircut</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service7} alt='' />
                    </div>
                    <span>Haircut and shampoo</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service8} alt='' />
                    </div>
                    <span>Hair treatment</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service9} alt='' />
                    </div>
                    <span>Beard trimming</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
                <div className='single_service d-flex justify-content-between align-items-center'>
                  <div className='service_inner d-flex align-items-center'>
                    <div className='thumb'>
                      <img src={service10} alt='' />
                    </div>
                    <span>Beard and moustache</span>
                  </div>
                  <p>………………………..$15</p>
                </div>
              </div>
              <div className='col-xl-12'>
                <div className='book_btn text-center'>
                  <a className='boxed-btn3 popup-with-form' href='#test-form'>
                    Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
