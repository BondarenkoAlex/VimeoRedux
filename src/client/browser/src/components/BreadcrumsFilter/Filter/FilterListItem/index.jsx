import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem/index';

function FilterListItem(props) {
  let {
        title,
        list,
      } = props;
  const subClassName = title.toLowerCase().replace(' ', '');
  // className='filter-items-container-open' у li
  return (
    <div
      className={`filter-items-container filter-items-container-${subClassName} `}>
      <a
        className="filter-items-container-title icon-chevron icon-chevron-down"
        href="#"
      >
        {title}
      </a>
      <ul className={`filter-item filter-item-${subClassName}-container`}>
        {list.map((item, i) => (
          <FilterItem
            key={i}
            title={item}
            subClassName={subClassName}
          />
        ))}
      </ul>
    </div>
  );
}

FilterListItem.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
};
FilterListItem.defaultProps = {
  title: '[FilterListItem]',
};

export default FilterListItem;
