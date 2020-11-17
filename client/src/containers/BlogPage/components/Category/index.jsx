import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../action';
import { Link } from 'react-router-dom';
const Category = () => {
  const Categories = useSelector((state) => state.blog.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Categories.length === 0) {
      dispatch(fetchCategory());
    }
  }, [Categories]);
  return (
    <aside className='single_sidebar_widget post_category_widget'>
      <h4 className='widget_title'>Category</h4>
      <ul className='list cat-list'>
        {Categories?.map((item) => (
          <li>
            <Link to={`/blog/category/${item.id}`} className='d-flex'>
              <p>{item.name}</p>
              <p>({item.count_blog}))</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Category;
