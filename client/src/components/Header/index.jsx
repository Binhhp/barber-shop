import React from 'react';
import Logo from '../../assets/img/logo.png';
import Barber_text from '../../assets/img/banner/barber_text.png';
import './styles.scss';
const Header = () => {
  return (
    <React.Fragment>
      <div>
        {/* header-start */}
        <header>
          <div className='header-area '>
            <div id='sticky-header' className='main-header-area'>
              <div className='container-fluid p-0'>
                <div className='row align-items-center no-gutters'>
                  <div className='col-xl-3 col-lg-3'>
                    <div className='logo-img'>
                      <a href='index.html'>
                        <img src={Logo} alt='' />
                      </a>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6'>
                    <div className='main-menu  d-none d-lg-block'>
                      <nav>
                        <ul id='navigation'>
                          <li>
                            <a className='active' href='index.html'>
                              home
                            </a>
                          </li>
                          <li>
                            <a href='about.html'>About</a>
                          </li>
                          <li>
                            <a href='service.html'>service</a>
                          </li>
                          <li>
                            <a href='#'>
                              blog <i className='ti-angle-down' />
                            </a>
                            <ul className='submenu'>
                              <li>
                                <a href='blog.html'>blog</a>
                              </li>
                              <li>
                                <a href='single-blog.html'>single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>
                              pages <i className='ti-angle-down' />
                            </a>
                            <ul className='submenu'>
                              <li>
                                <a href='elements.html'>elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='contact.html'>Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                    <div className='book_room'>
                      <div className='book_btn d-none d-lg-block'>
                        <a className='popup-with-form' href='#test-form'>
                          Make an Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='mobile_menu d-block d-lg-none' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-end */}
        {/* slider_area_start */}
        <div className='slider_area'>
          <div className='single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='slider_text text-center'>
                    <img src={Barber_text} alt='' />
                    <h3>
                      Best Barber in <br />
                      your Town
                    </h3>
                    <p>Professional Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider_area_end */}
      </div>
    </React.Fragment>
  );
};

export default Header;
