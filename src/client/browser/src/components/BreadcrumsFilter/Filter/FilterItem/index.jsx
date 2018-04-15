import React from 'react';
import PropTypes from 'prop-types';

import style from './filter-item.module.scss';

function FilterItem({ title, subClassName }) {
  return (
    <div className={style.filterEntity}>
      <a
        className={style.filterEntityLink}
        href="#"
      >
        {title}
      </a>
    </div>
  );
}

FilterItem.propTypes = {
  title: PropTypes.string,
  subClassName: PropTypes.string,
};
FilterItem.defaultProps = {
  title: '[*title*]',
  subClassName: '[subClassName]',
};

export default FilterItem;
