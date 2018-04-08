import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from '../../Svg/Heart';

import style from './favorite.module.scss';

const Favorite = (props) => {
  return (
    <li className={style.navHeaderFavorite}>
      <Link to="/">
        <div>
          <Heart />
        </div>
        <span className={style.navHeaderText}>Favorite</span>
        <span className={style.navHeaderBadge}>100</span>
      </Link>
    </li>
  );
};

Favorite.propTypes = {};
Favorite.defaultProps = {};

export default Favorite;
