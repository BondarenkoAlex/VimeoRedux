import React from 'react';
import PropTypes from 'prop-types';
import FilterListItemWrap from './FilterListItemWrap';
import style from './filter.module.scss';

const listShowby = ['Show by', '10', '24', '100'];
const listDuration = ['Duration', 'Short', 'Medium', 'Long'];
const listPeriod = ['Period', '7days', '30days', '90days'];
const list = [listShowby, listDuration, listPeriod];
// const list = [
//   {
//     title: 'Show by',
//     list: listShowby,
//   },
//   {
//     title: 'Duration',
//     list: listDuration,
//   },
//   {
//     title: 'Period',
//     list: listPeriod,
//   },
// ];

function Filter(props) {
  return (
    <div className={style.filterContainer}>
      {list.map(item => (
        <FilterListItemWrap list={item} />
      ))}
    </div>
  );
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
