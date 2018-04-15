import React from 'react';
import PropTypes from 'prop-types';
import FilterListItem from './FilterListItem/index';
import style from './filter.module.scss';

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
    <div className={style.filterContainer}>
      {list.map((item, i) => (
        <FilterListItem
          key={i}
          {...item}
        />
      ))}
    </div>
  );
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
