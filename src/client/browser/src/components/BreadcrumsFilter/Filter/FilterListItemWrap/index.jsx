/* eslint-disable react/jsx-first-prop-new-line,jsx-a11y/href-no-hash */
import React from 'react';
import PropTypes from 'prop-types';
import FilterListItem from '../FilterListItem';
import { EMPTY_ARRAY } from '../../../../constants/common';

import style from './filter-list-item-wrap.module.scss';

function FilterListItemWrap(props) {
  const { list } = props;
  const title = list[0];

  return (
    <div className={style.filterListItemWrap}>
      <div className={style.filterListItemWrapTitle}>
        {title}
      </div>
      <div className={style.filterListItemWrapList}>
        <FilterListItem list={list} />
      </div>
    </div>
  );
}

FilterListItemWrap.propTypes = {
  list: PropTypes.array,
  // title: PropTypes.string,
};
FilterListItemWrap.defaultProps = {
  // title: '[FilterListItem]',
  list: EMPTY_ARRAY,
};

export default FilterListItemWrap;
