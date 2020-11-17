import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Category from './components/Category';
import Newsletter from './components/Newsletter';
import RecentPost from './components/RecentPost';
import Search from './components/Search';
import Tag from './components/Tag';
import { getBlogsByPage } from './services';
import BlogItem from './components/Blogs/BlogItem';
import Pagination from './components/Pagination';

const BlogPage = () => {
  let { pageId, tagId, categoryId, keySearch } = useParams();
  let { path, url } = useRouteMatch();
  const [blogs, setBlogs] = useState([]);
  const [perPage, setPerPage] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogsByPage(pageId, categoryId, tagId, keySearch);
      if (res.success) {
        setBlogs(res.data.data);
        setPerPage(res.data.per_page);
        setTotalItem(res.data.total);
      }
    };
    fetchData();
    console.log(url, pageId, tagId, categoryId, keySearch);
  }, [url, pageId, tagId, categoryId, keySearch]);
  return (
    <React.Fragment>
      <Header isHome={false} title='Blog' />
      {/*================Blog Area =================*/}
      <section className='blog_area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mb-5 mb-lg-0'>
              <div className='blog_left_sidebar'>
                {blogs?.map((item) => (
                  <BlogItem item={item} />
                ))}
                <Pagination
                  pageActive={pageId ?? 1}
                  perPage={perPage}
                  totalItem={totalItem}
                />
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
