import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LogoImg } from '../Svg/LogoImg';

const project = require('../../../../../../webpack/project.config.js');

const publicPath = project.publicPath;

const Logo = () => (
  <div className="nav-header-logo-container nav-header-logo">
    <Link to={publicPath}>
      <LogoImg />
      <span>vimeoredux</span>
    </Link>
  </div>
);

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
