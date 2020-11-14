import React from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Category from './components/Category';
import Newsletter from './components/Newsletter';
import RecentPost from './components/RecentPost';
import Search from './components/Search';
import Tag from './components/Tag';

const BlogPage = () => {
  let { pageId, tagId, categoryId } = useParams();

  return (
    <React.Fragment>
      <Header isHome={false} title='Blog' />
      {/*================Blog Area =================*/}
      <section className='blog_area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mb-5 mb-lg-0'>
              <div className='blog_left_sidebar'>
                <nav className='blog-pagination justify-content-center d-flex'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <a href='#' className='page-link' aria-label='Previous'>
                        <i className='ti-angle-left' />
                      </a>
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
                      <a href='#' className='page-link' aria-label='Next'>
                        <i className='ti-angle-right' />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='blog_right_sidebar'>
                <Search />
                <Category />
                <RecentPost />
                <Tag />
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}
    </React.Fragment>
  );
};

export default BlogPage;
