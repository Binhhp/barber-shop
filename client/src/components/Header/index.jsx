import React from 'react';
import Logo from '../../assets/img/logo.png';
import Barber_text from '../../assets/img/banner/barber_text.png';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
const Header = ({ isHome, title }) => {
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
                      <Link to=''>
                        <img src={Logo} alt='' />
                      </Link>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6'>
                    <div className='main-menu  d-none d-lg-block'>
                      <nav>
                        <ul id='navigation'>
                          <li>
                            <NavLink exact activeClassName='active' to=''>
                              home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName='active' to='/about'>
                              About
                            </NavLink>
                          </li>
                          {/* <li>
                            <NavLink activeClassName='active' to='/service'>
                              service
                            </NavLink>
                          </li> */}
                          <li>
                            <NavLink activeClassName='active' to='/blog'>
                              Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName='active' to='/contact'>
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                    <div className='book_room'>
                      <div className='book_btn d-none d-lg-block'>
                        <Link className='popup-with-form' to='/appointment'>
                          Make an Appointment
                        </Link>
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
        {isHome ? (
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
        ) : (
          <div className='bradcam_area breadcam_bg overlay2'>
            <h3>{title}</h3>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  isHome: true,
  title: 'Wellcome ',
};

export default Header;