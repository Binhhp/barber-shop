import React, { useEffect, useState } from 'react';
import RecentPostItem from './RecentPostItem';
import imgPost3 from '../../../../assets/img/post/post_3.png';
import imgPost4 from '../../../../assets/img/post/post_4.png';
import imgPost2 from '../../../../assets/img/post/post_2.png';
import imgPost1 from '../../../../assets/img/post/post_1.png';
import { getRecentBlog } from '../../services';

import Moment from 'react-moment';

import './styles.scss';
const RecentPost = () => {
  const [blog, setBlog] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRecentBlog();
        if (res.success) {
          setBlog(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <aside className='single_sidebar_widget popular_post_widget'>
      <h3 className='widget_title'>Recent Post</h3>
      {blog?.map((item) => (
        <RecentPostItem
          link={`/blog/${item.id}`}
          img={item.imgPath}
          title={item.title}
          dateAt={item.created_at}
        />
      ))}
    </aside>
  );
};

export default RecentPost;
