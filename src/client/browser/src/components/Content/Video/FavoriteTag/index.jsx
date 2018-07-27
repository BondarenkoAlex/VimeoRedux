/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Heart as HeartLabel } from '../../../Svg/Heart';

import style from './favorite-tag.module.scss';

function FavoriteTag({ onClick }) {
  return (
    <div
      className={style.favoriteTag}
      onClick={onClick}
    >
      <HeartLabel fill="#567" />
    </div>
  );
}

FavoriteTag.propTypes = {
  onClick: PropTypes.func,
};
FavoriteTag.defaultProps = {};

export default FavoriteTag;
