import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import User from '../User/User';

import style from './account.module.scss';

const Account = (props) => {
  return (
    <div>
    {/*<Link to="/" className={style.account}>*/}
      <User />
      {/*<div className={[style.iconChevron, style.iconChevronDown]}>*/}
        {/*<User />*/}
      {/*</div>*/}
    {/* </Link>*/}
    </div>
  );
};

Account.propTypes = {};
Account.defaultProps = {};

export default Account;
