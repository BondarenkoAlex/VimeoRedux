import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EMPTY_STRING } from '../../../constants/common';

import style from './author.module.scss';

class Author extends PureComponent {
  render() {
    const {
      src,
      name,
    } = this.props;
    return (
      <div className={style.author}>
        <Link
          to="#"
          className={style.authorLink}
        >
          <img
            src={src}
            alt={name}
            className={style.authorAvatar}
          />
          <span className={style.authorName}>
            {name} {name}
          </span>
        </Link>
      </div>
    );
  }
}

Author.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
Author.defaultProps = {
  src: EMPTY_STRING,
  name: EMPTY_STRING,
};

export default Author;
