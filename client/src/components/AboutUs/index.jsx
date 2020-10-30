import React from 'react';
import about_lft from '../../assets/img/about/about_lft.png';
const AboutUs = () => {
  return (
    <>
      {/* about_area_start */}
      <div className='about_area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-6'>
              <div className='about_thumb'>
                <img src={about_lft} alt='' />
                <div className='opening_hour text-center'>
                  <i className='flaticon-clock' />
                  <h3>Opening Hour</h3>
                  <p>
                    Mon-Fri (9.00-11.00) <br />
                    Sat (10.00-4.00)
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='about_info'>
                <div className='section_title mb-20px'>
                  <span>About Us</span>
                  <h3>
                    Experienced and <br />
                    Traditional Stylish <br />
                    Barber Shop
                  </h3>
                </div>
                <p>
                  Inspires employees and organizations to support causes they
                  care <br />
                  about. We do this to bring more resources to the nonprofits
                  that are <br />
                  changing our world.
                </p>
                <a href='#' className='boxed-btn3'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about_area_end */}
    </>
  );
};

export default AboutUs;
