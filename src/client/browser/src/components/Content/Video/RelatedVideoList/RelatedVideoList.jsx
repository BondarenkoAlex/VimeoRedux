import React from 'react';
import PropTypes from 'prop-types';
import RelatedVideo from '../RelatedVideo/RelatedVideo';

import style from './related-video-list.module.scss';

function RelatedVideoList(props) {
  return (
    <div className={style.relatedVideoList}>
      <div className={style.relatedVideoListTitle}>
        <h3>Related video</h3>
      </div>
      <div className={style.relatedVideoListVideoList}>
        {[1, 2, 3].map((video, i) => (
          <RelatedVideo key={i} />
        ))}
      </div>
    </div>
  );
}

RelatedVideoList.propTypes = {};
RelatedVideoList.defaultProps = {};

export default RelatedVideoList;
