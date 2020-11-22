import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postNewsletter } from '../../containers/BlogPage/services';
const Footer = () => {
  const [email, setMail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postNewsletter(email);
      console.log(res);
      if (res.code === 200) {
        Swal.fire('Success!', 'Subscribe success.', 'success');
      } else if (res.code === 405) {
      }
    } catch (error) {
      console.log(error, 'error onHandleSubmit Newsletter');
      Swal.fire('Success!', 'You have already registered', 'error');
    }
  };
  return (
    <React.Fragment>
      <footer className='footer'>
        <div className='footer_top'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 col-md-6 col-lg-3'>
                <div className='footer_widget'>
                  <h3 className='footer_title'>Join With Us</h3>
                  <p className='footer_text doanar'>
                    {' '}
                    <Link className='first' to='/appointment'>
                      Make Appointment
                    </Link>{' '}
                    <br />
                    <Link to='/appointment'>+084 393 837 623</Link>
                  </p>
                </div>
              </div>
              <div className='col-xl-3 col-md-6 col-lg-3'>
                <div className='footer_widget'>
                  <h3 className='footer_title'>address</h3>
                  <p className='footer_text'>
                    99 Nguyen Chi Thanh, Lang Thuong, Đong Đa Ha Noi <br />
                    +084 393 837 623
                    <br />
                    <a className='domain' href='#'>
                      shopbarber346@gmail.com
                    </a>
                  </p>
                  <div className='socail_links'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fa fa-facebook-square' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 col-md-6 col-lg-2'>
                <div className='footer_widget'>
                  <h3 className='footer_title'>Navigation</h3>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-4 col-md-6 col-lg-4'>
                <div className='footer_widget'>
                  <h3 className='footer_title'>Newsletter</h3>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className='newsletter_form'>
                    <input
                      type='text'
                      onChange={(e) => setMail(e.target.value)}
                      placeholder='Enter your mail'
                    />
                    <button type='submit'>Sign Up</button>
                  </form>
                  <p className='newsletter_text'>
                    Subscribe newsletter to get updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy-right_text'>
          <div className='container'>
            <div className='footer_border' />
            <div className='row'>
              <div className='col-xl-12'>
                <p className='copy_right text-center'>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This website is licensed by{' '}
                  <i className='fa fa-heart-o' aria-hidden='true' /> by{' '}
                  <a
                    href='https://github.com/Binhhp/barber-shop'
                    target='_blank'>
                    KhoaLT-BinhVT
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
