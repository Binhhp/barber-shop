import React from 'react';
import comment_3 from '../../../../assets/img/comment/comment_3.png';
import comment_1 from '../../../../assets/img/comment/comment_1.png';
import comment_2 from '../../../../assets/img/comment/comment_2.png';
const Comment = () => {
  return (
    <div className='comments-area'>
      <h4>05 Comments</h4>
      <div className='comment-list'>
        <div className='single-comment justify-content-between d-flex'>
          <div className='user justify-content-between d-flex'>
            <div className='thumb'>
              <img src={comment_1} alt='' />
            </div>
            <div className='desc'>
              <p className='comment'>
                Multiply sea night grass fourth day sea lesser rule open subdue
                female fill which them Blessed, give fill lesser bearing
                multiply sea night grass fourth day sea lesser
              </p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                  <h5>
                    <a href='#'>Emilly Blunt</a>
                  </h5>
                  <p className='date'>December 4, 2017 at 3:12 pm </p>
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
      <div className='comment-list'>
        <div className='single-comment justify-content-between d-flex'>
          <div className='user justify-content-between d-flex'>
            <div className='thumb'>
              <img src={comment_2} alt='' />
            </div>
            <div className='desc'>
              <p className='comment'>
                Multiply sea night grass fourth day sea lesser rule open subdue
                female fill which them Blessed, give fill lesser bearing
                multiply sea night grass fourth day sea lesser
              </p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                  <h5>
                    <a href='#'>Emilly Blunt</a>
                  </h5>
                  <p className='date'>December 4, 2017 at 3:12 pm </p>
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
      <div className='comment-list'>
        <div className='single-comment justify-content-between d-flex'>
          <div className='user justify-content-between d-flex'>
            <div className='thumb'>
              <img src={comment_3} alt='' />
            </div>
            <div className='desc'>
              <p className='comment'>
                Multiply sea night grass fourth day sea lesser rule open subdue
                female fill which them Blessed, give fill lesser bearing
                multiply sea night grass fourth day sea lesser
              </p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                  <h5>
                    <a href='#'>Emilly Blunt</a>
                  </h5>
                  <p className='date'>December 4, 2017 at 3:12 pm </p>
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
    </div>
  );
};

export default Comment;
