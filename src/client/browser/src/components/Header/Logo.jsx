import React, {
  PropTypes,
} from 'react';

const Logo = (props) => {
  return (
    <div className="nav-header-logo-container nav-header-logo">
      <a href="#">
        <img src="/src/images/logo-vimeo.svg"/>
        <span>vimeoredux</span>
      </a>
    </div>
  );
};

Logo.propTypes    = {};
Logo.defaultProps = {};

export default Logo;
