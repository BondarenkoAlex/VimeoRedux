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
      <RelatedVideo />
    </div>
  );
}

RelatedVideoList.propTypes = {};
RelatedVideoList.defaultProps = {};

export default RelatedVideoList;
