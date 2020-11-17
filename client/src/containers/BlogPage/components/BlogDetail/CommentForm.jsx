import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { postComment } from '../../services';
import Swal from 'sweetalert2';
const CommentForm = ({ blogId }) => {
  const [comment, setComment] = useState({ blog_id: blogId });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(comment);
    try {
      console.log(JSON.stringify(comment));

      const res = await postComment(comment);
      console.log(comment);
      console.log(comment);
      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Comment success!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
                name='content'
                id='content'
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
                name='phone_number'
                id='phone_number'
                onChange={(e) => handleOnChange(e)}
                type='text'
                placeholder='Phone'
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='form-group'>
              <input
                className='form-control'
                name='email'
                id='email'
                onChange={(e) => handleOnChange(e)}
                type='text'
                placeholder='Email'
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

CommentForm.propTypes = {
  blogId: PropTypes.number,
};

export default CommentForm;
