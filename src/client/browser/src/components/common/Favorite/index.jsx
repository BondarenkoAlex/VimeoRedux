import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from '../../Svg/Heart';

import style from './favorite.module.scss';

class Favorite extends PureComponent {
  render() {
    return (
      <div className={style.favorite}>
        <Link to="#">
          <Heart fill="#567"/>
        </Link>
      </div>
    );
  }
}

Favorite.propTypes = {};
Favorite.defaultProps = {};

export default Favorite;
