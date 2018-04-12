import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search/Search';
import Favorite from './Favorite/Favorite';

function Menu(props) {
  return (
    <div>
      <Search />
      <Favorite />
    </div>
  );
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
