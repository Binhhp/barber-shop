import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const RecentPostItem = ({ img, title, dateAt, link }) => {
  return (
    <div className='media post_item'>
      <img src={img} alt='post' />
      <div className='media-body'>
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>
          <Moment fromNow ago>
            {dateAt}
          </Moment>
        </p>
      </div>
    </div>
  );
};

RecentPostItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  dateAt: PropTypes.string,
};
RecentPostItem.defaultProps = {
  img: '',
  title: 'From life was you fish...',
  link: '',
  dateAt: 'January 12, 2019',
};

export default RecentPostItem;
