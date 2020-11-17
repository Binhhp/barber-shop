import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
  return (
    <div className='comment-form'>
      <h4>Leave a Reply</h4>
      <form className='form-contact comment_form' action='#' id='commentForm'>
        <div className='row'>
          <div className='col-12'>
            <div className='form-group'>
              <textarea
                className='form-control w-100'
                name='comment'
                id='comment'
                cols={30}
                rows={9}
                placeholder='Write Comment'
                defaultValue={''}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                name='name'
                id='name'
                type='text'
                placeholder='Name'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                className='form-control'
                name='email'
                id='email'
                type='email'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='form-group'>
              <input
                className='form-control'
                name='website'
                id='website'
                type='text'
                placeholder='Website'
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <button
            type='submit'
            className='button button-contactForm btn_1 boxed-btn'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
