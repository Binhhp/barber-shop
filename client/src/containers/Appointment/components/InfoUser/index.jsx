import React from 'react';

const InfoUser = () => {
  return (
    <>
      <h4 className='title-steps'>5. User</h4>
      <div className='col-lg-12'>
        <div className='form-group'>
          <label htmlFor>Phone</label>
          <input
            type='text'
            className='form-control'
            aria-describedby='helpId'
            placeholder='Enter your Phone Number'
          />
        </div>
        <div className='form-group'>
          <label htmlFor>Email</label>
          <input
            type='email'
            className='form-control'
            aria-describedby='helpId'
            placeholder='Enter your email'
          />
        </div>
      </div>
    </>
  );
};

export default InfoUser;
