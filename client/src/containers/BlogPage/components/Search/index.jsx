import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [key, setKey] = useState();
  const handleInput = (e) => {
    setKey(e.target.value);
  };
  return (
    <aside className='single_sidebar_widget search_widget'>
      <div className='form-group'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            name='key'
            onChange={(e) => handleInput(e)}
            placeholder='Search Keyword'
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Search Keyword'"
          />
          <div className='input-group-append'>
            <Link to={`/blog/key/${key}`} className='btn' type='button'>
              <i className='ti-search' />
            </Link>
          </div>
        </div>
      </div>
      <Link
        to={`/blog/key/${key}`}
        className='button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn'
        type='submit'>
        Search
      </Link>
    </aside>
  );
};

export default Search;
