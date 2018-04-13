import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../Menu/Search/Search';

import style from './menu-mobile.module.scss';

function MenuMobile(props) {
  return (
    <div className={style.menuMobile}>
      <div className={style.menuMobileSearch}>
        <Search />
      </div>
      <div className={style.menuMobileFavorite}>
        <Link
          to="/"
          className={style.menuMobileLink}
        >
          <span className={style.menuMobileSpan}>Favorite</span>
        </Link>
      </div>
      <div className={style.menuMobileLogout}>
        <Link
          to="/"
          className={style.menuMobileLink}
        >
          <span className={style.menuMobileSpan}>Log Out</span>
        </Link>
      </div>
    </div>
  );
}

MenuMobile.propTypes = {};
MenuMobile.defaultProps = {};

export default MenuMobile;
