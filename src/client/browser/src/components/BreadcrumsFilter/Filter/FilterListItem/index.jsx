/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem/index';
import { EMPTY_ARRAY } from '../../../../constants/common';

import style from './filter-list-item.module.scss';

function FilterListItem(props) {
  const { list } = props;

  return (
    <div className={style.filterListItem}>
      {list.map(title => (
        <FilterItem title={title} />
      ))}
    </div>
  );
}

FilterListItem.propTypes = {
  list: PropTypes.array,
};
FilterListItem.defaultProps = {
  list: EMPTY_ARRAY,
};

export default FilterListItem;
