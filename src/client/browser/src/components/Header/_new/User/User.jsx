import React from 'react';
import PropTypes from 'prop-types';
import { Login } from '../../../Svg/Login';

import style from './user.module.scss';

function User(props) {
  return (
    <div>
      <Login className={style.userImage} />
    </div>
  );
}

User.propTypes = {};
User.defaultProps = {};

export default User;
