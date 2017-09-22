import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from './Img';
import { EMPTY_STRING } from '../../constants/common';

class Author extends PureComponent {
  render() {
    const {
            src,
            name,
          } = this.props;
    return (
      <Link to="#">
        <Img
          src={src}
          alt="dsdfs"
        />
        <span>
          {name}
        </span>
      </Link>
    );
  }
}

Author.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
Author.defaultProps = {
  pictureUrl: EMPTY_STRING,
  name: EMPTY_STRING,
};

export default Author;
