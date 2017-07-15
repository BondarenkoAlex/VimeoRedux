import React from 'react';
import PropTypes from 'prop-types';
import FilterListItem from './FilterListItem';

function Filter(props) {
  let listShowby   = ['Show by', '10', '24', '100'];
  let listDuration = ['Duration', 'Short', 'Medium', 'Long'];
  let listPeriod   = ['Period', '7days', '30days', '90days'];
  let list         = [
    { title: 'Show by', list: listShowby },
    { title: 'Duration', list: listDuration },
    { title: 'Period', list: listPeriod },
  ];
  return (
    <ul className="filter-container clearfix">
      {list.map(item => (
        <FilterListItem {...item} />
      ))}
    </ul>
  );
}

Filter.propTypes    = {};
Filter.defaultProps = {};

export default Filter;
