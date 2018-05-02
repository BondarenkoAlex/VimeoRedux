/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_OBJECT } from '../../../constants/common';
import { isEmpty } from '../../../utils/check';
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
      user,
      tags,
      created_time: createdTime,
      metadata,
    } = video;
    const { name: userName, pictures } = user;
    const userPictureUrl = pictures && pictures.sizes && pictures.sizes[1].link; // todo
    const { connections: { comments: { total: commentsTotal } } } = metadata;
    const { connections: { likes: { total: likesTotal } } } = metadata;
    return (
      <main className="site-main clearfix">
        <div className="container">
          <div className={style.video}>
            <div className={style.videoClipWrap}>
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
                <Comments />
              </div>
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
