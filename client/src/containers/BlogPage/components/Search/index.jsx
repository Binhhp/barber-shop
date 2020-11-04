import React from 'react';

const Search = () => {
  return (
    <aside className='single_sidebar_widget search_widget'>
      <form action='#'>
        <div className='form-group'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Keyword'
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Search Keyword'"
            />
            <div className='input-group-append'>
              <button className='btn' type='button'>
                <i className='ti-search' />
              </button>
            </div>
          </div>
        </div>
        <button
          className='button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn'
          type='submit'>
          Search
        </button>
      </form>
    </aside>
  );
};

export default Search;
