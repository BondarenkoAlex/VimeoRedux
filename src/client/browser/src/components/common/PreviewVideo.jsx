import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from './Img';

class PreviewVideo extends PureComponent {
  render() {
    const {
            pictureUrl,
            duration,
            idVideo,
          } = this.props;

    return (
      <Link to={`/videos/${idVideo}`}>
        <Img
          className="preview"
          src={pictureUrl}
        />
        <span className="duration">
          {duration}
        </span>
      </Link>
    );
  }
}

PreviewVideo.propTypes = {
  idVideo: PropTypes.number,
  pictureUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
PreviewVideo.defaultProps = {};

export default PreviewVideo;
