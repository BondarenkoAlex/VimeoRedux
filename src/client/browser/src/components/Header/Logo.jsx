import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <div className="nav-header-logo-container nav-header-logo">
      <a href="#">
        <img src={require('../../../../../images/logo-vimeo.png')}/>
        <span>vimeoredux</span>
      </a>
    </div>
  );
};

Logo.propTypes    = {};
Logo.defaultProps = {};

export default Logo;
