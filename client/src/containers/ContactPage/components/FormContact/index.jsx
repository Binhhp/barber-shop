import React, { useState } from 'react';
import { postContact } from '../../service';
import Swal from 'sweetalert2';
const FormContact = () => {
  const [bodyContact, setBodyContact] = useState({});
  const handleOnChange = (e) => {
    setBodyContact({ ...bodyContact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(bodyContact));
      const res = await postContact(bodyContact);
      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Your contact has been sent.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {}
  };
  return (
    <form
      className='form-contact contact_form'
      onSubmit={(e) => handleSubmit(e)}
      id='contactForm'
      noValidate='novalidate'>
      <div className='row'>
        <div className='col-12'>
          <div className='form-group'>
            <textarea
              className='form-control w-100'
              name='message'
              id='message'
              onChange={(e) => handleOnChange(e)}
              cols={30}
              rows={9}
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter Message'"
              placeholder=' Name'
              defaultValue={''}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <input
              className='form-control valid'
              name='name'
              id='name'
              onChange={(e) => handleOnChange(e)}
              type='text'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter your name'"
              placeholder='Enter your name'
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <input
              className='form-control valid'
              name='phone_number'
              id='phone_number'
              onChange={(e) => handleOnChange(e)}
              type='text'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter phone number'"
              placeholder='Phone'
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='form-group'>
            <input
              className='form-control'
              name='email'
              onChange={(e) => handleOnChange(e)}
              id='email'
              type='text'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter email address'"
              placeholder='Enter email address'
            />
          </div>
        </div>
      </div>
      <div className='form-group mt-3'>
        <button type='submit' className='button button-contactForm boxed-btn'>
          Send
        </button>
      </div>
    </form>
  );
};

export default FormContact;
