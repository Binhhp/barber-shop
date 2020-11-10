import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';
import './styles.scss';
const AppointmentDay = ({ setDateAppointment }) => {
  const [selectedDate, setSelectedDate] = useState(1);
  const today = moment();
  const tomorrow = moment().add(1, 'd');
  const nextTomorrow = moment().add(2, 'd');

  const changeDate = (date, num) => {
    setDateAppointment(date);
    console.log(date);
    setSelectedDate(num);
  };
  return (
    <div class='form-group'>
      <h4 className='title-steps'>1. Chọn thời gian</h4>
      <div className='row'>
        <div className='col text-center'>
          <button
            className={selectedDate === 1 ? 'time-item active' : 'time-item'}
            onClick={() => changeDate(today.format('YYYY/MM/DD'), 1)}>
            Hôm nay&nbsp;
            <Moment date={today} format='DD/MM' />
          </button>
        </div>
        <div className='col text-center'>
          <button
            className={selectedDate === 2 ? 'time-item active' : 'time-item'}
            onClick={() => changeDate(tomorrow.format('YYYY/MM/DD'), 2)}>
            Hôm mai&nbsp;
            <Moment date={tomorrow} format='DD/MM' />
          </button>
        </div>
        <div className='col text-center'>
          <button
            className={selectedDate === 3 ? 'time-item active' : 'time-item'}
            onClick={() => changeDate(nextTomorrow.format('YYYY/MM/DD'), 3)}>
            Hôm kia&nbsp;
            <Moment date={nextTomorrow} format='DD/MM' />
          </button>
        </div>
      </div>
    </div>
  );
};

AppointmentDay.propTypes = {
  setDateAppointment: PropTypes.func,
};

export default AppointmentDay;
