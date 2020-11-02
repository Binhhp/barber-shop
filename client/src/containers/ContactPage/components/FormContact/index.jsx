import React from 'react';

const FormContact = () => {
  return (
    <form
      className='form-contact contact_form'
      action='contact_process.php'
      method='post'
      id='contactForm'
      noValidate='novalidate'>
      <div className='row'>
        <div className='col-12'>
          <div className='form-group'>
            <textarea
              className='form-control w-100'
              name='message'
              id='message'
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
              name='email'
              id='email'
              type='email'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter email address'"
              placeholder='Email'
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='form-group'>
            <input
              className='form-control'
              name='subject'
              id='subject'
              type='text'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter Subject'"
              placeholder='Enter Subject'
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
