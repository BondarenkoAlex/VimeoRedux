import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginSvg from '../../../Svg/Login';

import style from './account.module.scss';

const Account = (props) => {
  return (
    <Link to="/" className={style.account}>
      <div className={[style.iconChevron, style.iconChevronDown]}>
        <LoginSvg className={style.favoriteLogin} />
      </div>
    </Link>
  );
};

Account.propTypes = {};
Account.defaultProps = {};

export default Account;
