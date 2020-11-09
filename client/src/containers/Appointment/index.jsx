import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Header from '../../components/Header';
import avatar from '../../assets/img/team/1.png';
import checkYellow from '../../assets/img/checkYellow.svg';
import './styles.scss';

const Appointment = (props) => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
  };
  const settinngAppoinment = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 4,
    slidesPerRow: 5,
  };
  return (
    <React.Fragment>
      <Header isHome={false} title='Make Appointment' />

      <section className='appointment-section'>
        <div className='container'>
          <div className='d-none d-sm-block mb-5 pb-4'></div>
          <div className='row'>
            <div className='col-lg-8'>
              <form>
                <div class='form-group'>
                  <h4 className='title-steps'>1. Chọn thời gian</h4>
                  <div className='row'>
                    <div className='col text-center'>
                      <button className='time-item active'>
                        Hôm nay 01/11
                      </button>
                    </div>
                    <div className='col text-center'>
                      <button className='time-item'>Hôm nay 01/11</button>
                    </div>
                    <div className='col text-center'>
                      <button className='time-item'>Hôm nay 01/11</button>
                    </div>
                  </div>
                </div>
                <div class='form-group'>
                  <h4 className='title-steps'>2. Chọn stylist</h4>
                  <div className='row px-5'>
                    <div className='slide'>
                      <Slider {...settings}>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist1'
                              defaultValue='option1'
                              defaultChecked
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist1'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist2'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist2'>
                              <img className='avatar' src={avatar} alt='' />{' '}
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        {/* <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div>
                        <div>
                          <div className='stylist-item'>
                            <input
                              className='check-stylist'
                              type='radio'
                              name='stylist'
                              id='stylist3'
                              defaultValue='option1'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='stylist3'>
                              <img className='avatar' src={avatar} alt='' />
                              <img className='check' src={checkYellow} alt='' />
                            </label>
                            <p className='name'>Trọng khoa</p>
                          </div>
                        </div> */}
                      </Slider>
                    </div>
                  </div>
                </div>

                <div class='form-group time-hour'>
                  <h4 className='title-steps'>3. Chọn giờ cắt</h4>

                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='row px-4'>
                        <div className='col'>
                          <div className='box'>
                            <div className='square unavailable'></div>
                            Hết chỗ
                          </div>
                        </div>
                        <div className='col'>
                          <div className='box'>
                            <div className='square available'></div>
                            Còn chỗ
                          </div>
                        </div>
                        <div className='col'>
                          <div className='box'>
                            <div className='square active'></div>
                            Đang chọn
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='appointment'>
                        <Slider {...settinngAppoinment}>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                          <div className='appointment-time'>
                            <button>8h00</button>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>Thông tin đặt lịch</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

Appointment.propTypes = {};

export default Appointment;
