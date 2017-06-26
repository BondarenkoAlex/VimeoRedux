import React, {
  PropTypes,
} from 'react';
import Logo from './Logo';
import Account from './Account';
import Favorite from './Favorite';
import Search from './Search';

const Header = (props) => {
  return (
    <header className="nav-header clearfix">
      <div className="container">
        <div className="wrap-container">
          <nav className="nav-header-navigation">
            <Logo />
            <label
              className="label-for-checkbox"
              htmlFor="toggle-menu"
              aria-label="Menu">&#9776;
            </label>
            <input className="checkbox-for-menu" id="toggle-menu" type="checkbox"/>
            <ul className="nav-header-search-favorite">
              <Search />
              <Favorite />
              <Account />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes    = {};
Header.defaultProps = {};

export default Header;

