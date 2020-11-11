import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import checkYellow from '../../../../assets/img/checkYellow.svg';
import { SET_BARBER_APPOINTMENT } from '../../constants';
import { fetchTimeAppointment } from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const BarberItem = ({ item: { id, imgPath, name, email } }) => {
  const dispatch = useDispatch();
  const dateAppointment = useSelector((state) => state.appointment.date);
  const handleOnChange = (e) => {
    dispatch({ type: SET_BARBER_APPOINTMENT, payload: e.target.value });
    dispatch(fetchTimeAppointment(dateAppointment, e.target.value));
  };
  // useEffect(() => {
  //   dispatch(fetchTimeAppointment(dateAppointment, barber));
  // }, [dateAppointment]);
  return (
    <div className='stylist-item'>
      <input
        className='check-stylist'
        type='radio'
        name='stylist'
        id={id}
        value={id}
        onChange={(e) => handleOnChange(e)}
      />
      <label className='form-check-label' htmlFor={id}>
        <img className='avatar' src={imgPath} alt='' />
        <img className='check' src={checkYellow} alt='' />
      </label>
      <p className='name'>{name}</p>
    </div>
  );
};

BarberItem.propTypes = {};

export default BarberItem;
