import React, {
  PropTypes,
} from 'react';

const Favorite = (props) => {
  return (
    <li className="nav-header-favorite">
      <a href="#">
        <div>
          <img src={require('../../../../../images/favorite_header.png')}/>
        </div>
        <span className="nav-header-text">Favorite</span>
        <span className="nav-header-badge">100</span>
      </a>
    </li>
  );
};

Favorite.propTypes    = {};
Favorite.defaultProps = {};

export default Favorite;
