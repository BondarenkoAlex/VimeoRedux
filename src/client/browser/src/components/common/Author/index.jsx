import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from '../Img';
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
          <Img
            src={src}
            alt=""
          />
          <span className={style.authorName}>
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
};
Author.defaultProps = {
  pictureUrl: EMPTY_STRING,
  name: EMPTY_STRING,
};

export default Author;
