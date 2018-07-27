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
      size,
    } = this.props;
    const classAuthor = size ? style[`author__avatar--${size}`] : style.authorAvatar;
    const classAuthorName = size ? style[`author__name--${size}`] : style.authorName;
    return (
      <div className={style.author}>
        <Link
          to="#"
          className={style.authorLink}
        >
          <img
            src={src}
            alt={name}
            className={classAuthor}
          />
          <span className={classAuthorName}>
            {name}
          </span>
        </Link>
      </div>
    );
  }
}

Author.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['lg'/* , 'xl' */]),
};
Author.defaultProps = {
  src: EMPTY_STRING,
  name: EMPTY_STRING,
};

export default Author;
