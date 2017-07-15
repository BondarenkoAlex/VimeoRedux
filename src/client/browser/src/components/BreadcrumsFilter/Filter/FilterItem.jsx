import React from 'react';
import PropTypes from 'prop-types';

function FilterItem({ title, subClassName }) {
  return (
    <li className="filter-entity filter-item-duration">
      <a
        className="filter-entity-link"
        href="#"
      >
        {title}
      </a>
    </li>
  );
}

FilterItem.propTypes    = {
  title: PropTypes.string,
  subClassName: PropTypes.string,
};
FilterItem.defaultProps = {
  title: '[*title*]',
  subClassName: '[subClassName]',
};

export default FilterItem;
