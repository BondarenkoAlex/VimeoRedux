import React from 'react';
import PropTypes from 'prop-types';
import LoginSvg from '../../../Svg/Login';
import { EMPTY_STRING } from '../../../../constants/common';

import style from './user.module.scss';

function User({ src, name }) {
  return (
    <div className={style.user}>
      {src
        ? (
          <img
            className={style.userImg}
            src={src}
            alt={name}
          />)
        : (
          <LoginSvg className={style.userSvg} fill={'green'}/>)
      }
    </div>
  );
}

User.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

User.defaultProps = {
  name: EMPTY_STRING,
};

export default User;
