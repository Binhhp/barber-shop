import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTag } from '../../action';
const Tag = () => {
  const tags = useSelector((state) => state.blog.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tags.length === 0) {
      dispatch(fetchTag());
    }
  }, [tags]);
  return (
    <aside className='single_sidebar_widget tag_cloud_widget'>
      <h4 className='widget_title'>Tag Clouds</h4>
      <ul className='list'>
        {tags?.map((item) => (
          <li>
            <Link to={`/blog/tag/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Tag;
