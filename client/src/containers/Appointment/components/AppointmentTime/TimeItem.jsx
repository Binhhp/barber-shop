import React from 'react';
import PropTypes from 'prop-types';
import { SET_TIME_APPOINTMENT } from '../../constants';
import { useDispatch } from 'react-redux';
const TimeItem = ({ item: { id, time, time_des, type } }) => {
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const id = e.target.value.split('time-')[1];
    // console.log(id, 'heheheehhe')
    dispatch({ type: SET_TIME_APPOINTMENT, payload: id });
  };
  return (
    <div className='appointment-time'>
      <input
        className='check-stylist'
        disabled={type}
        type='radio'
        name='time-appointmemt'
        onChange={(e) => handleOnchange(e)}
        id={'time-' + id}
        value={'time-' + id}
      />

      {type === true ? (
        <label className='form-check-label unavailable' htmlFor={'time-' + id}>
          <span className='unavailable'>{time_des}</span>
        </label>
      ) : (
        <label className='form-check-label available' htmlFor={'time-' + id}>
          <span className='unavailable'>{time_des}</span>
        </label>
      )}
    </div>
  );
};

TimeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    time: PropTypes.number,
    time_des: PropTypes.string,
    type: PropTypes.bool,
  }),
};

export default TimeItem;
