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
import Pagination from './components/pagination';

const BlogPage = () => {
  const [activePage, setActivePage] = useState(1);
  let { pageId, tagId, categoryId, key } = useParams();
  const [perPage, setPerPage] = useState();
  const [totalItem, setTotalItem] = useState();
  const [blogs, setBlogs] = useState([]);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogsByPage(pageId, categoryId, tagId, key);
      if (data.success) {
        setBlogs(data.data.data);
        setPerPage(data.data.per_page);
        setTotalItem(data.data.total);
      }
    };
    fetchData();
  }, [pageId, tagId, categoryId, key]);

  useEffect(() => {
    setActivePage(pageId || 1);
  }, [pageId]);
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
                  <BlogItem key={item.id} item={item} />
                ))}
                <Pagination perPage={perPage} pageActive={pageId || 1} />
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
