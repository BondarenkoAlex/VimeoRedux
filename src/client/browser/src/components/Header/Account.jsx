import React from 'react';
import PropTypes from 'prop-types';

const Account = (props) => {
  return (
    <li className="nav-header-log-in-out">
      <a className="nav-header-user" href="#">
        <div className="icon-chevron icon-chevron-down">
          <img src={require('../../../../../images/account-logo.jpg')}/>
        </div>
        <span className="nav-header-text">Log Out</span>
      </a>
    </li>
  );
};

Account.propTypes    = {};
Account.defaultProps = {};

export default Account;
