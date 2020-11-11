import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ServiceItem from './ServiceItem';
import './styles.scss';
import { useEffect } from 'react';
const ServiceArea = ({ services }) => {
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
              {/* {console.log(Array.from(services),services,'servicesservices')} */}
              {services && services.map((item) => <ServiceItem item={item} />)}

              <div className='col-xl-12'>
                <div className='book_btn text-center'>
                  <Link
                    className='boxed-btn3 popup-with-form'
                    to='/appointment'>
                    Make an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceArea.propTypes = {
  services: PropTypes.array.isRequired,
};

export default ServiceArea;
