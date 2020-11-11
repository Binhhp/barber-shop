import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Header from '../../components/Header';
import avatar from '../../assets/img/team/1.png';
import checkYellow from '../../assets/img/checkYellow.svg';
import './styles.scss';
import AppointmentDay from './components/AppointmentDay';
import { fetchBarber } from './action';
import { useDispatch, useSelector } from 'react-redux';
import SlideBarber from './components/SlideBarber';
import AppointmentTime from './components/AppointmentTime';
import ServiceAppointment from './components/ServiceAppointment'
const Appointment = (props) => {
  const barbers = useSelector((state) => state.appointment.barbers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!barbers) {
      dispatch(fetchBarber());
    }
  }, [barbers]);
  return (
    <React.Fragment>
      <Header isHome={false} title='Make Appointment' />

      <section className='appointment-section'>
        <div className='container'>
          <div className='d-none d-sm-block mb-5 pb-4'></div>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2 className='contact-title'>Appointment Information</h2>
            </div>
            <div className='col-lg-8 mx-auto'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}>
                <AppointmentDay />
                <div class='form-group'>
                  <h4 className='title-steps'>2. Stylists</h4>
                  <div className='row px-5'>
                    <div className='slide'>
                      <SlideBarber barbers={barbers} />
                    </div>
                  </div>
                </div>
                <div class='form-group time-hour'>
                  <h4 className='title-steps'>3. Time</h4>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='row px-4'>
                        <div className='col'>
                          <div className='box'>
                            <div className='square unavailable'></div>
                            Unavailable
                          </div>
                        </div>
                        <div className='col'>
                          <div className='box'>
                            <div className='square available'></div>
                            Available
                          </div>
                        </div>
                        <div className='col'>
                          <div className='box'>
                            <div className='square active'></div>
                            Actived
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='appointment'>
                        <AppointmentTime />
                      </div>
                    </div>
                  </div>
                </div>
                <ServiceAppointment />
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

Appointment.propTypes = {};

export default Appointment;
