import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Img from '../Img';
import Ratio from '../Ratio/Ratio';
import { EMPTY_STRING } from '../../../constants/common';

import style from './preview-video.module.scss';

class PreviewVideo extends PureComponent {
  render() {
    const {
      pictureUrl,
      duration,
      idVideo,
      path,
      //alt,
    } = this.props;

    return (
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
    );
  }
}

PreviewVideo.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idVideo: PropTypes.number.isRequired,
};
PreviewVideo.defaultProps = {
  pictureUrl: EMPTY_STRING,
  //alt: EMPTY_STRING,
};

export default PreviewVideo;
