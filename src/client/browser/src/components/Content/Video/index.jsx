/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'utils/check';
import { text2HTML } from 'utils/text2HTML';
import { getMetadataComments, getMetadataLikes } from 'utils/helpers';
import { EMPTY_OBJECT } from '../../../constants/common';
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
    const commentsTotal = getMetadataComments(video).total;
    const likesTotal = getMetadataLikes(video).total;

    return (
      <main className="site-main clearfix">
        <div className="container">
          <div className={style.video}>
            <div className={style.videoClip}>
              <HeaderVideo
                title={title}
                idUser={user}
                tags={tags}
                commentsTotal={commentsTotal}
                createdTime={createdTime}
                likesTotal={likesTotal}
              />
              <div
                className={style.videoDescription}
                dangerouslySetInnerHTML={{ __html: text2HTML(description) }}
              />
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
