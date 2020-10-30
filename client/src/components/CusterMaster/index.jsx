import React from 'react';
import custer1 from '../../assets/img/team/1.png';
import custer2 from '../../assets/img/team/2.png';
import custer3 from '../../assets/img/team/3.png';
import custer4 from '../../assets/img/team/4.png';
import './styles.scss';

const CusterMaster = () => {
  return (
    <React.Fragment>
      {/* cutter_muster_start */}
      <div className='cutter_muster'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title2 text-center mb-90'>
                <i className='flaticon-scissors' />
                <h3>Our Cutter Masters</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='single_master'>
                <div className='thumb'>
                  <img src={custer1} alt='' />
                  <div className='social_link'>
                    <a href='#'>
                      <i className='fa fa-envelope' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </div>
                </div>
                <div className='master_name text-center'>
                  <h3>Macau Wilium</h3>
                  <p>Massage Master</p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='single_master'>
                <div className='thumb'>
                  <img src={custer2} alt='' />
                  <div className='social_link'>
                    <a href='#'>
                      <i className='fa fa-envelope' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </div>
                </div>
                <div className='master_name text-center'>
                  <h3>Dan Jacky</h3>
                  <p>Mens Cut</p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='single_master'>
                <div className='thumb'>
                  <img src={custer3} alt='' />
                  <div className='social_link'>
                    <a href='#'>
                      <i className='fa fa-envelope' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </div>
                </div>
                <div className='master_name text-center'>
                  <h3>Luka Luka</h3>
                  <p>Mens Cut</p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='single_master'>
                <div className='thumb'>
                  <img src={custer4} alt='' />
                  <div className='social_link'>
                    <a href='#'>
                      <i className='fa fa-envelope' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </div>
                </div>
                <div className='master_name text-center'>
                  <h3>Rona Dana</h3>
                  <p>Ladies Cut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cutter_muster_end */}
    </React.Fragment>
  );
};

export default CusterMaster;
