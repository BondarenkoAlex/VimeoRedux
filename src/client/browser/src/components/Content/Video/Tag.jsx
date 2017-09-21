import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_STRING } from '../../../constants/common';

function Tag({ name }) {
  return (
    <Link to="#">
      <span>{name}</span>
    </Link>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
};
Tag.defaultProps = {
  name: EMPTY_STRING,
};

export default Tag;
