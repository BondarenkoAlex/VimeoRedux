/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Author from '../../../common/Author/index';
import ClipStatistics from '../ClipStatistics/index';

import style from './header-video.module.scss';

function HeaderVideo({
  title,
  userPictureUrl,
  userName,
  tags,
  createdTime,
  likesTotal,
  commentsTotal,
}) {
  return (
    <div className={style.headerVideo}>
      <div className={style.headerVideoTitle}>
        <h1>{title}</h1>
      </div>
      <div className={style.headerVideoAuthor}>
        <Author
          name={userName}
          src={userPictureUrl}
          size="lg"
        />
      </div>
      <div className={style.headerVideoStatistic}>
        <ClipStatistics
          tags={tags}
          commentsTotal={commentsTotal}
          createdTime={createdTime}
          likesTotal={likesTotal}
        />
      </div>
    </div>
  );
}

HeaderVideo.propTypes = {
  title: PropTypes.string.isRequired,
  userPictureUrl: PropTypes.string,
  userName: PropTypes.string,
  tags: PropTypes.array.isRequired,
  createdTime: PropTypes.string.isRequired,
  likesTotal: PropTypes.number.isRequired,
  commentsTotal: PropTypes.number.isRequired,
};
HeaderVideo.defaultProps = {};

export default HeaderVideo;
