import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_STRING } from '../../constants/common';

class TitleVideo extends PureComponent {
  render() {
    const {
            title,
          } = this.props;
    return (
      <Link to="#">
        {title}
      </Link>
    );
  }
}

TitleVideo.propTypes = {
  title: PropTypes.string,
};
TitleVideo.defaultProps = {
  title: EMPTY_STRING,
};

export default TitleVideo;
