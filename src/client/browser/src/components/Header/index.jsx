import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import Account from './Account/Account';
import Favorite from './Favorite/Favorite';
import Search from './Search/Search';
import MenuSearch from './Menu/Menu';

import BurgerMenu from './BurgerMenu/BurgerMenu';

import style from './header.module.scss';

// заменить на контейнеры т.к. работы будет идти через него
const Header = (props) => {
  return (
    <header className={[style.navHeader, 'clearfix']}>
      <div className="container">
        <div className="wrap-container">
          <nav className={[style.navHeaderNavigation, 'clearfix']}>
            <Logo />
            <label
              className={style.labelForCheckbox}
              htmlFor="toggle-menu"
              aria-label="Menu">&#9776;
            </label>
            <input className={style.checkboxForMenu} id="toggle-menu" type="checkbox" />
            <ul className={style.navHeaderSearchFavorite}>
              <Search />
              <Favorite />
              <Account />
              <MenuSearch />

              <BurgerMenu>
                <ul>
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </ul>
              </BurgerMenu>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

