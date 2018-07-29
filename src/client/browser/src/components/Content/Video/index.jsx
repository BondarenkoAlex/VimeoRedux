/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_OBJECT } from '../../../constants/common';
import { isEmpty } from '../../../utils/check';
import { getMetadataComments, getMetadataLikes } from '../../../utils/helpers';
import Comments from './Comments/index';
import RelatedVideoList from './RelatedVideoList/RelatedVideoList';
import HeaderVideo from './HeaderVideo';

import style from './video.module.scss';

class Video extends PureComponent {
  render() {
    const { video } = this.props;
    if (isEmpty(video)) return null;
    const {
      name: title,
      description,
      user,
      tags,
      created_time: createdTime,
      metadata,
    } = video;
    const { name: userName, pictures } = user;
    const userPictureUrl = pictures && pictures.sizes && pictures.sizes[1].link; // todo
    const commentsTotal = getMetadataComments(video).total;
    const likesTotal = getMetadataLikes(video).total;
    return (
      <main className="site-main clearfix">
        <div className="container">
          <div className={style.video}>
            <div className={style.videoClip}>
              <HeaderVideo
                title={title}
                userName={userName}
                userPictureUrl={userPictureUrl}
                tags={tags}
                commentsTotal={commentsTotal}
                createdTime={createdTime}
                likesTotal={likesTotal}
              />
              <div className={style.videoDescription}>{description}</div>
              <Comments />
            </div>
            <aside className={style.videoRelated}>
              <RelatedVideoList />
            </aside>
          </div>
        </div>
      </main>
    );
  }
}

Video.propTypes = {
  video: PropTypes.object,
};
Video.defaultProps = {
  video: EMPTY_OBJECT,
};

export default Video;
