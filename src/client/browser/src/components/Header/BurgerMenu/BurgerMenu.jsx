/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import style from "./burger-menu.module.scss";

function BurgerMenu({ label, children }) {
  return (
    <Fragment>
      <input
        id="toggle-mobile-menu"
        className={style.burgerMenuCheckbox}
        type="checkbox"
      />

      <label
        className={style.burgerMenuLabel}
        htmlFor="toggle-mobile-menu"
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <div className={style.burgerMedia}>
        <div className={style.burgerMenuChildren}>{children}</div>
      </div>
    </Fragment>
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
  label: "&#9776;",
};

export default BurgerMenu;
