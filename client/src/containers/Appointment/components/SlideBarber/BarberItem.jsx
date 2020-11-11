import React from 'react';
import PropTypes from 'prop-types';
import checkYellow from '../../../../assets/img/checkYellow.svg';

const BarberItem = ({ item: { id, imgPath, name, email } }) => {
  return (
    <div>
      <div className='stylist-item'>
        <input
          className='check-stylist'
          type='radio'
          name='stylist'
          id={id}
          defaultValue='option1'
          defaultChecked
        />
        <label className='form-check-label' htmlFor={id}>
          <img className='avatar' src={imgPath} alt='' />
          <img className='check' src={checkYellow} alt='' />
        </label>
        <p className='name'>{name}</p>
      </div>
    </div>
  );
};

BarberItem.propTypes = {};

export default BarberItem;
