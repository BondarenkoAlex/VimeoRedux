import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_STRING } from '../../constants/common';

class Img extends PureComponent {
  render() {
    const { src, alt, className } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
Img.defaultProps = {
  src: EMPTY_STRING,
  alt: EMPTY_STRING,
  className: EMPTY_STRING,
};

export default Img;
