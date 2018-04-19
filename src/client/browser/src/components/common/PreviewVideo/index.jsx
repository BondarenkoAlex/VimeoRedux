import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from '../Img';

import style from './preview-video.module.scss';

class PreviewVideo extends PureComponent {
  render() {
    const {
      pictureUrl,
      duration,
      idVideo,
      path,
    } = this.props;

    return (
      <Link
        to={`${path}/${idVideo}`}
        className={style.previewVideoLink}
      >
        <Img
          className={style.previewVideoLinkImg}
          src={pictureUrl}
        />
        <span className={style.previewVideoLinkDuration}>
          {duration}
        </span>
      </Link>
    );
  }
}

PreviewVideo.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idVideo: PropTypes.number.isRequired,
};
PreviewVideo.defaultProps = {};

export default PreviewVideo;
