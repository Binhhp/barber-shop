import React from 'react';
import VideoImg from '../../assets/img/gallery/video.png';
import { Link } from 'react-router-dom';
const VideoHome = () => {
  return (
    <>
      {/* video_area_start */}
      <div className='video_area'>
        <div className='container-fluid p-0'>
          <div className='row align-items-center no-gutters'>
            <div className='col-xl-6 col-lg-6'>
              <div className='video_info'>
                <div className='about_info'>
                  <div className='section_title mb-20px'>
                    <span>How we Work</span>
                    <h3>
                      Watch the Video <br />
                      How we Work?
                    </h3>
                  </div>
                  <p>
                    Inspires employees and organizations to support causes they
                    care <br />
                    about. We do this to bring more resources to the nonprofits
                    that are <br />
                    changing our world.
                  </p>
                  <Link to='/appointment' className='boxed-btn3'>
                    book now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='video_thumb'>
                <div className='video_thumb_inner'>
                  <img src={VideoImg} alt='' />
                  <a
                    href='https://www.youtube.com/watch?v=I4NcwG-zusE'
                    className='popup-video'>
                    <i className='fa fa-play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video_area_end */}
    </>
  );
};

export default VideoHome;
