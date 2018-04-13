import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import Account from './Account/Account';
import Favorite from './Favorite/Favorite';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import MenuMobile from './MenuMobile/MenuMobile';

import BurgerMenu from './BurgerMenu/BurgerMenu';

import style from './header.module.scss';

// заменить на контейнеры т.к. работы будет идти через него
const Header = (props) => {
  return (
    <header className={[style.navHeader, 'clearfix']}>
      <div className="container">
        <div className="wrap-container">
          <nav className={style.headerNavigation}>
            <Logo />

            {/*<Menu />*/}
            <BurgerMenu>
              <MenuMobile />
            </BurgerMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

