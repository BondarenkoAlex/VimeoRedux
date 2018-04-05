import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from '../../Svg/Heart';

const Favorite = (props) => {
  return (
    <li className="nav-header-favorite">
      <Link to="/">
        <div>
          <Heart />
        </div>
        <span className="nav-header-text">Favorite</span>
        <span className="nav-header-badge">100</span>
      </Link>
    </li>
  );
};

Favorite.propTypes = {};
Favorite.defaultProps = {};

export default Favorite;
