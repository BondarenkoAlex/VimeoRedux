import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <footer className="site-footer clearfix">
      <div className="container">
        <div className="wrap-container">
          <ul className="copyright">
            <li><span>© 2017 copyright</span></li>
          </ul>
          <ul className="connect">
            <li><a href="">BondarenkoAlex on github.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
