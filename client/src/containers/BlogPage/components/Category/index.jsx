import React from 'react';

const Category = () => {
  return (
    <aside className='single_sidebar_widget post_category_widget'>
      <h4 className='widget_title'>Category</h4>
      <ul className='list cat-list'>
        <li>
          <a href='#' className='d-flex'>
            <p>Resaurant food</p>
            <p>(37)</p>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex'>
            <p>Travel news</p>
            <p>(10)</p>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex'>
            <p>Modern technology</p>
            <p>(03)</p>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex'>
            <p>Product</p>
            <p>(11)</p>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex'>
            <p>Inspiration</p>
            <p>21</p>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex'>
            <p>Health Care (21)</p>
            <p>09</p>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Category;
