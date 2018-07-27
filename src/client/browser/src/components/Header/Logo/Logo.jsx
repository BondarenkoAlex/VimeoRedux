import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Logo as LogoSvg } from '../../Svg/Logo';
import style from './logo.module.scss';

const Logo = () => {
  return (
    <div className={style.navHeaderLogoContainer}>
      <Link to="/">
        <LogoSvg />
        <span>vimeoredux</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
