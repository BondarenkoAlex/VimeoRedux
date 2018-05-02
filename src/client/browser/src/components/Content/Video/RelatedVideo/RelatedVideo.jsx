import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ratio from '../../../common/Ratio/Ratio';

import style from './related-video.module.scss';

function RelatedVideo(props) {
  return (
    <div className={style.relatedVideo}>
      {[1, 2, 3].map((video, i) => (
        <div className={style.relatedVideoItem}>
          <div className={style.relatedVideoImageContainer}>
            <Ratio ratio="16:9">
              <Link
                to="#"
                className={style.relatedVideoLink}
              >
                <img
                  src="https://i.vimeocdn.com/video/188703261_640x360.jpg?r=pad"
                  alt=""
                  className={style.relatedVideoImage}
                />
              </Link>
            </Ratio>
          </div>
          <div className={style.relatedVideoTitleContainer}>
            <Link
              to="#"
              className={style.relatedVideoTitle}
            >
              RUIN AND ROSE Whistler ParkEdit
            </Link>
            <Link
              to="#"
              className={style.relatedVideoAuthor}
            >
              Spela Cadez
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

RelatedVideo.propTypes = {};
RelatedVideo.defaultProps = {};

export default RelatedVideo;

{/*
<Ratio ratio="16:9">
  <Link
    to={`${path}/${idVideo}`}
    className={style.previewVideoLink}
  >
    <img
      src={pictureUrl}
      alt=""
      className={style.previewVideoLinkImg}
    />
    <span className={style.previewVideoLinkDuration}>
            {duration}
          </span>
  </Link>
</Ratio>
*/
}
