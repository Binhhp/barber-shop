import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import './styles.scss';
const Pagination = ({ pageActive, perPage, totalItem }) => {
  let { path, url } = useRouteMatch();
  // console.log(path, url);
  const [start, setStart] = useState(pageActive);
  console.log(pageActive, perPage, totalItem);
  return (
    <nav className='blog-pagination justify-content-center d-flex'>
      <ul className='pagination'>
        <li className='page-item'>
          <Link
            to={`${url}?page=${start - 1}`}
            className={start === 1 ? 'isDisabled page-link' : 'page-link'}
            aria-label='Previous'>
            <i className='ti-angle-left' />
          </Link>
        </li>
        <li className='page-item'>
          <a href='#' className='page-link'>
            1
          </a>
        </li>
        <li className='page-item active'>
          <a href='#' className='page-link'>
            2
          </a>
        </li>
        <li className='page-item'>
          <Link
            to={`${url}?page=${start + 1}`}
            className={start === perPage ? 'isDisabled page-link' : 'page-link'}
            aria-label='Next'>
            <i className='ti-angle-right' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageActive: PropTypes.number,
  perPage: PropTypes.number,
  totalItem: PropTypes.number,
};

export default Pagination;
