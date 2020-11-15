import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Newsletter from '../Newsletter';
import Tag from '../Tag';
import RecentPost from '../RecentPost';
import Category from '../Category';
import Search from '../Search';
import Header from '../../../../components/Header';
import CommentForm from './CommentForm';
import { fetchBlogById } from '../../action';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const BlogDetail = () => {
  const blog = useSelector((state) => state.blog.blog);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(blog, 'blog');
    if (!blog) {
      dispatch(fetchBlogById(id));
    }
  }, [blog]);
  return (
    <React.Fragment>
      <Header isHome={false} title={blog?.title} />
      <section className='blog_area section-padding'>
        <div className='container'>
          <div className='row'>
            <div class='col-lg-8 posts-list'>
              <div className='single-post'>
                <div className='feature-img'>
                  <img className='img-fluid' src={blog?.imgPath} alt='' />
                </div>
                <div className='blog_details'>
                  <h2>{blog?.description}</h2>
                  {blog?.content}
                </div>
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
      ){/*================Blog Area =================*/}
    </React.Fragment>
  );
};

// BlogDetail.propTypes = {
//   title: PropTypes.string,
//   imgPath: PropTypes.string,
//   content: PropTypes.string,
//   id: PropTypes.number,
//   description: PropTypes.string,
// };

export default BlogDetail;
