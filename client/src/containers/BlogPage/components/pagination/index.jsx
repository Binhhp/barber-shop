import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PageItem = ({ page, link, pageCurrent }) => {
  return (
    <li className={page === pageCurrent ? 'page-item active' : 'page-item'}>
      <Link to={link} className='page-link'>
        {page}
      </Link>
    </li>
  );
};
const Pagination = ({ perPage, pageActive }) => {
  console.log(pageActive, 'activeClass');
  const start = pageActive - 1 > 0 ? pageActive - 2 : 1;
  const RenderPaging = () => {
    let res = [];
    for (let i = start; i < start + 3; i++) {
      res.push(<PageItem page={i} link='' pageCurrent={pageActive} />);
    }

    return res;
  };

  return (
    <nav className='blog-pagination justify-content-center d-flex'>
      <ul className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link' aria-label='Previous'>
            <i className='ti-angle-left' />
          </a>
        </li>

        {RenderPaging()?.map((e) => e)}
        <li className='page-item'>
          <a href='#' className='page-link' aria-label='Previous'>
            <i className='ti-angle-right' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {};

export default Pagination;
