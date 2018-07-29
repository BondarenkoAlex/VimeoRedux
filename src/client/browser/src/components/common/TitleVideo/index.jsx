import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_STRING } from '../../../constants/common';

import style from './title-video.module.scss';

class TitleVideo extends PureComponent {
  render() {
    const {
      title,
    } = this.props;
    return (
      <div className={style.titleVideo}>
        <Link
          to="#"
          className={style.titleVideoLink}
        >
          {title}
        </Link>
      </div>
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
