import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_STRING } from '../../../../../constants/common';

import style from './tag.module.scss';

function Tag({ name }) {
  return (
    <Link
      to="#"
      className={style.tag}
    >
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
