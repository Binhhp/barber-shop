import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CommentForm = ({ blogId }) => {
  const [comment, setComment] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };
  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  return (
    <div className='comment-form'>
      <h4>Leave a Reply</h4>
      <form
        className='form-contact comment_form'
        onSubmit={(e) => handleSubmit(e)}
        id='commentForm'>
        <div className='row'>
          <div className='col-12'>
            <div className='form-group'>
              <textarea
                className='form-control w-100'
                name='comment'
                id='comment'
                onChange={(e) => handleOnChange(e)}
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
                onChange={(e) => handleOnChange(e)}
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
                onChange={(e) => handleOnChange(e)}
                type='email'
                placeholder='Email'
              />
            </div>
          </div>
          {/* <div className='col-12'>
            <div className='form-group'>
              <input
                className='form-control'
                name='website'
                id='website'
                type='text'
                placeholder='Website'
              />
            </div>
          </div> */}
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

CommentForm.propTypes = {
  blogId: PropTypes.number,
};

export default CommentForm;
