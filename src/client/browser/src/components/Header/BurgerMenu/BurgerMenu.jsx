import React from 'react';
import PropTypes from 'prop-types';

import style from './burger-menu.module.scss';

function BurgerMenu({ label, children }) {
  return (
    <div>
      <input
        id="toggle-mobile-menu"
        className={style.checkboxForMenu}
        type="checkbox"
      />

      <label
        className={style.labelForCheckbox}
        htmlFor="toggle-mobile-menu"
        dangerouslySetInnerHTML={{ __html: label }}
      />



      <div>
        {children}
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
BurgerMenu.defaultProps = {
  label: '&#9776;',
};

export default BurgerMenu;
