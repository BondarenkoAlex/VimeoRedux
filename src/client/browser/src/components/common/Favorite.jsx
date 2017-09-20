import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from '../Svg/Heart';

class Favorite extends PureComponent {
  render() {
    return (
      <Link to="#">
        <Heart />
      </Link>
    );
  }
}

Favorite.propTypes = {};
Favorite.defaultProps = {};

export default Favorite;
