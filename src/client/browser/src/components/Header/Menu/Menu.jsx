import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search/Search';
import Favorite from './Favorite/Favorite';
import Account from './Account/Account';

import style from './menu.module.scss';

function Menu(props) {
  return (
    <div className={style.menu}>
      <div className={style.menuSearch}>
        <Search />
      </div>
      <Favorite />
      <Account />
    </div>
  );
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
