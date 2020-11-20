import React, { useState } from 'react';
import { postNewsletter } from '../../services';
import Swal from 'sweetalert2';
const Newsletter = () => {
  const [email, setEmail] = useState();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postNewsletter(email);
      console.log(res);
      if (res.code === 200) {
        Swal.fire('Success!', 'Subscribe success.', 'success');
      } else if (res.code === 405) {
      }
    } catch (error) {
      console.log(error, 'error onHandleSubmit Newsletter');
      Swal.fire('Success!', 'You have already registered', 'error');
    }
  };
  return (
    <aside className='single_sidebar_widget newsletter_widget'>
      <h4 className='widget_title'>Newsletter</h4>
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter email'"
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          className='button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn'
          type='submit'>
          Subscribe
        </button>
      </form>
    </aside>
  );
};

export default Newsletter;
