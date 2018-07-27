import React from 'react';
import PropTypes from 'prop-types';

import style from './footer.module.scss';

function Footer(props) {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="wrap-container">
          <ul className={style.footerCopyright}>
            <li><span>© 2017 copyright</span></li>
          </ul>
          <ul className={style.footerConnect}>
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
