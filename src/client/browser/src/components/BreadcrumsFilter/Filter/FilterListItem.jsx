import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';

function FilterListItem(props) {
  let {
        title,
        list,
      } = props;
  const subClassName = title.toLowerCase().replace(' ', '');
  return (
    <li
      className={`filter-items-container filter-items-container-${subClassName} filter-items-container-open`}>
      <a
        className="filter-items-container-title icon-chevron icon-chevron-down"
        href="#"
      >
        {title}
      </a>
      <ul className={`filter-item filter-item-${subClassName}-container`}>
        {list.map(item => (
          <FilterItem title={item} subClassName={subClassName}/>
        ))}
      </ul>
    </li>
  );
}

FilterListItem.propTypes    = {
  list: PropTypes.array,
  title: PropTypes.string,
};
FilterListItem.defaultProps = {
  title: '[FilterListItem]',
};

export default FilterListItem;
