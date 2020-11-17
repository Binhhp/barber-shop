import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogItem = ({
  item: { id, imgPath, title, description, countComment },
}) => {
  return (
    <article className='blog_item'>
      <div className='blog_item_img'>
        <img className='card-img rounded-0' src={imgPath} alt='' />
        <a href='#' className='blog_item_date'>
          <h3>15</h3>
          <p>Jan</p>
        </a>
      </div>
      <div className='blog_details'>
        <Link className='d-inline-block' to={`/blog/${id}`}>
          <h2>{title}</h2>
        </Link>

        <p>{description}</p>
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
  item: PropTypes.shape({
    imgPath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    countComment: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default BlogItem;
