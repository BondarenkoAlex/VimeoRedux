import React from 'react';
import PropTypes from 'prop-types';
import LoginSvg from '../../../Svg/Login';

import style from './user.module.scss';

function User({ src }) {
  return (
    <div className={style.user}>
      { src
        ? (
          <img src="" alt=""> )
                              : (
            <LoginSvg className={style.user} /> )
          </div>
        );
      }

      User.propTypes = {
      src: PropTypes.string,
    };
      User.defaultProps = {};

      export default User;
