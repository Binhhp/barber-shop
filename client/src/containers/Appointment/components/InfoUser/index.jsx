import React, { useState } from 'react';
import PropTypes from 'prop-types';
const InfoUser = ({ setObjAppointment }) => {
  const [infoUser, setInfoUser] = useState({});
  const handleOnChange = (e) => {
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
    setObjAppointment({ ...infoUser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h4 className='title-steps'>5. User</h4>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label htmlFor>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            aria-describedby='helpId'
            onChange={(e) => handleOnChange(e)}
            placeholder='Enter your name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor>Phone</label>
          <input
            type='text'
            name='phone_number'
            className='form-control'
            aria-describedby='helpId'
            onChange={(e) => handleOnChange(e)}
            placeholder='Enter your Phone Number'
          />
        </div>
        <div className='form-group'>
          <label htmlFor>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            onChange={(e) => handleOnChange(e)}
            aria-describedby='helpId'
            placeholder='Enter your email'
          />
        </div>
      </div>
    </>
  );
};
InfoUser.propTypes = {
  setObjAppointment: PropTypes.func.isRequired,
};
export default InfoUser;
