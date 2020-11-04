import React from 'react';
import RecentPostItem from './RecentPostItem';
import imgPost3 from '../../../../assets/img/post/post_3.png';
import imgPost4 from '../../../../assets/img/post/post_4.png';
import imgPost2 from '../../../../assets/img/post/post_2.png';
import imgPost1 from '../../../../assets/img/post/post_1.png';
const RecentPost = () => {
  return (
    <aside className='single_sidebar_widget popular_post_widget'>
      <h3 className='widget_title'>Recent Post</h3>
      <RecentPostItem
        img={imgPost1}
        title='The Amazing Hubble'
        dateAt='02 Hours ago'
      />
      <RecentPostItem
        img={imgPost2}
        title='The Amazing Hubble'
        dateAt='02 Hours ago'
      />
      <RecentPostItem
        img={imgPost3}
        title='The Amazing Hubble'
        dateAt='02 Hours ago'
      />
      <RecentPostItem
        img={imgPost4}
        title='The Amazing Hubble'
        dateAt='02 Hours ago'
      />
    </aside>
  );
};

export default RecentPost;
