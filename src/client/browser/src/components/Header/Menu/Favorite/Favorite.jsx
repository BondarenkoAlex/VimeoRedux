import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeartSvg } from '../../../Svg/Heart';

import style from './favorite.module.scss';

const Favorite = ({ favoriteCount }) => (
  <Link
    className={style.favorite}
    to="/"
  >
    <HeartSvg className={style.favoriteHeart} />
    <span className={style.favoriteBadge}>{favoriteCount}</span>
  </Link>
);

Favorite.propTypes = {
  favoriteCount: PropTypes.number,
};

Favorite.defaultProps = {
  favoriteCount: 0,
};

export default Favorite;
