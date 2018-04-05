import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Login } from '../../Svg/Login';

const Account = (props) => {
  return (
    <li className="nav-header-log-in-out">
      <Link to="/" className="nav-header-user">
        <div className="icon-chevron icon-chevron-down">
          <Login />
        </div>
        <span className="nav-header-text">Log Out</span>
      </Link>
    </li>
  );
};

Account.propTypes = {};
Account.defaultProps = {};

export default Account;
