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
            path,
          } = this.props;

    return (
      <Link to={`${path}/${idVideo}`}>
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
  pictureUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idVideo: PropTypes.number.isRequired,
};
PreviewVideo.defaultProps = {};

export default PreviewVideo;
