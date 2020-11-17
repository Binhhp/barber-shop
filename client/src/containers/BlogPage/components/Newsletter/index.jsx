import React from 'react';

const Newsletter = () => {
  return (
    <aside className='single_sidebar_widget newsletter_widget'>
      <h4 className='widget_title'>Newsletter</h4>
      <form action='#'>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter email'"
            placeholder='Enter email'
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
