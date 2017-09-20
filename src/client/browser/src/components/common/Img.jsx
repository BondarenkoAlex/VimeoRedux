import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_STRING } from '../../constants/common';

class Img extends PureComponent {
  render() {
    const { src, alt } = this.props;
    return (
      <img
        src={src}
        alt={alt}
      />
    );
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
Img.defaultProps = {
  src: EMPTY_STRING,
  alt: EMPTY_STRING,
};

export default Img;
