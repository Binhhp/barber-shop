import React from 'react';
import gallery1 from '../../assets/img/gallery/1.png';
import gallery2 from '../../assets/img/gallery/2.png';
import gallery3 from '../../assets/img/gallery/3.png';
const Gallery = () => {
  return (
    <>
      {/* gallery_area_start */}
      <div className='gallery_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title2 text-center mb-90'>
                <i className='flaticon-scissors' />
                <h3>Our Gallery</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='gallery_active owl-carousel'>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery1} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery1}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery2} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery2}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery3} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery3}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery1} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery1}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery2} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery2}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='single_gallery'>
                  <div className='thumb'>
                    <img src={gallery3} alt='' />
                    <div className='image_hover'>
                      <a className='popup-image' href={gallery3}>
                        <i className='ti-plus' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallery_area_end */}
    </>
  );
};

export default Gallery;
