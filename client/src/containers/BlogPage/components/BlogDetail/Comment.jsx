import React, { useEffect, useState } from 'react';
import { getComments } from '../../services';
import comment_3 from '../../../../assets/img/comment/comment_3.png';
import comment_1 from '../../../../assets/img/comment/comment_1.png';
import comment_2 from '../../../../assets/img/comment/comment_2.png';
const Comment = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      const res = await getComments(blogId);
      if (res.success) {
        setComments(res.data);
      }
    };
    fetchComment();
  }, []);
  return (
    <div className='comments-area'>
      <h4>{comments.length} Comments</h4>
      {comments?.map((e) => (
        <div className='comment-list'>
          <div className='single-comment justify-content-between d-flex'>
            <div className='user justify-content-between d-flex'>
              <div className='thumb'>
                <img src={comment_1} alt='' />
              </div>
              <div className='desc'>
                <p className='comment'>{e.content}</p>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <h5>
                      <a href='#'>{e.name}</a>
                    </h5>
                    <p className='date'>{e.created_at}</p>
                  </div>
                  <div className='reply-btn'>
                    <a href='#' className='btn-reply text-uppercase'>
                      reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
