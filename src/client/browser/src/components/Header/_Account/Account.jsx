import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Login } from '../../Svg/Login';

import style from './account.module.scss';

const Account = (props) => {
  return (
    <li className={style.navHeaderLogInOut}>
      <Link to="/" className="">
        <div className={[style.iconChevron, style.iconChevronDown]}>
          <Login />
        </div>
        <span className={style.navHeaderText}>Log Out</span>
      </Link>
    </li>
  );
};

Account.propTypes = {};
Account.defaultProps = {};

export default Account;
