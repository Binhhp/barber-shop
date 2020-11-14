import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Newsletter from '../Newsletter';
import Tag from '../Tag';
import RecentPost from '../RecentPost';
import Category from '../Category';
import Search from '../Search';
import Header from '../../../../components/Header';
import CommentForm from './CommentForm';

const BlogDetail = ({ title, imgPath, content, id }) => {
  return (
    <React.Fragment>
      <Header isHome={false} title={title} />
      {/*================Blog Area =================*/}
      <section className='blog_area section-padding'>
        <div className='container'>
          <div className='row'>
            <div class='col-lg-8 posts-list'>
              <div className='single-post'>
                <div className='feature-img'>
                  <img className='img-fluid' src={imgPath} alt='' />
                </div>
                <div className='blog_details'>{content}</div>
              </div>

              <Comment />
              <CommentForm />
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

BlogDetail.propTypes = {
  title: PropTypes.string,
  imgPath: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default BlogDetail;
