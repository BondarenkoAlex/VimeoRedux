import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Logo as LogoSvg } from '../Svg/Logo';
//
// const project = require('../../../../../../webpack/project.config.js');
//
// const publicPath = project.publicPath;

const Logo = () => (
  <div className="nav-header-logo-container nav-header-logo">
    <Link to="/">
      <LogoSvg />
      <span>vimeoredux</span>
    </Link>
  </div>
);

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
