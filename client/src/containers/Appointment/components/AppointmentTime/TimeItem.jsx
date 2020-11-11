import React from 'react';
import PropTypes from 'prop-types';

const TimeItem = (props) => {
  return (
    <div className='appointment-time'>
      <input className='check-stylist' type='radio' name='stylist' id={id} />
      <label className='form-check-label' htmlFor={id}>
        <span className='active'>8h00</span>
      </label>
    </div>
  );
};

TimeItem.propTypes = {};

export default TimeItem;
