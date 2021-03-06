import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './filter-item.module.scss';

function FilterItem({ title }) {
  return (
    <div className={style.filterItem}>
      <Link
        className={style.filterItemLink}
        to="#"
      >
        {title}
      </Link>
    </div>
  );
}

FilterItem.propTypes = {
  title: PropTypes.string,
};
FilterItem.defaultProps = {
  title: '[*title*]',
};

export default FilterItem;
