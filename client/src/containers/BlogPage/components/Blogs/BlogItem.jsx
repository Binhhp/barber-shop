import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ id, img, title, desc, countComment }) => {
  return (
    <article className='blog_item'>
      <div className='blog_item_img'>
        <img className='card-img rounded-0' src={img} alt='' />
        <a href='#' className='blog_item_date'>
          <h3>15</h3>
          <p>Jan</p>
        </a>
      </div>
      <div className='blog_details'>
        <a className='d-inline-block' href={`/blog/${id}`}>
          <h2>{title}</h2>
        </a>

        <p>{desc}</p>
        <ul className='blog-info-link'>
          <li>
            <a href='#'>
              <i className='fa fa-user' /> L.T.K
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-comments' /> {countComment} Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

BlogItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  countComment: PropTypes.number,
  id: PropTypes.number,
};

export default BlogItem;
