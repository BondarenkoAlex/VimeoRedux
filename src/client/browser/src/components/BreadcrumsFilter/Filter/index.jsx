import React from 'react';
import PropTypes from 'prop-types';
import FilterListItem from './FilterListItem';

function Filter(props) {
  const listShowby = ['Show by', '10', '24', '100'];
  const listDuration = ['Duration', 'Short', 'Medium', 'Long'];
  const listPeriod = ['Period', '7days', '30days', '90days'];
  const list = [
    {
      title: 'Show by',
      list: listShowby,
    },
    {
      title: 'Duration',
      list: listDuration,
    },
    {
      title: 'Period',
      list: listPeriod,
    },
  ];
  return (
    <ul className="filter-container clearfix">
      {list.map((item, i) => (
        <FilterListItem
          key={i}
          {...item}
        />
      ))}
    </ul>
  );
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
