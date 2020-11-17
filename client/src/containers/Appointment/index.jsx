import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Header from '../../components/Header';
import avatar from '../../assets/img/team/1.png';
import checkYellow from '../../assets/img/checkYellow.svg';
import './styles.scss';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import AppointmentDay from './components/AppointmentDay';
import { fetchBarber } from './action';
import { useDispatch, useSelector } from 'react-redux';
import SlideBarber from './components/SlideBarber';
import AppointmentTime from './components/AppointmentTime';
import ServiceAppointment from './components/ServiceAppointment';
import InfoUser from './components/InfoUser';
import { makeAppointment } from './services';
const Appointment = (props) => {
  const barbers = useSelector((state) => state.appointment.barbers);
  const appointment = useSelector((state) => state.appointment);
  const [objAppointment, setObjAppointment] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (!barbers) {
      dispatch(fetchBarber());
    }
  }, [barbers]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...objAppointment,
      date: appointment.date,
      ser_id: appointment.serviceId,
      time_id: appointment.time,
      barber_id: appointment.barberId,
    };
    try {
      const res = await makeAppointment(data);
      if (res.success) {
        Swal.fire('Success!', 'Your appointment has been accept.', 'success');
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const getInfoUser = (e) => {
    setObjAppointment({ ...objAppointment, ...e });
  };
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
              <form onSubmit={(e) => onHandleSubmit(e)}>
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
                <div class='form-group'>
                  <InfoUser setObjAppointment={(e) => setObjAppointment(e)} />
                </div>
                <br />
                <div className='col-xl-12'>
                  <button type='submit' className='boxed-btn3 w-100'>
                    Submit
                  </button>
                </div>
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
