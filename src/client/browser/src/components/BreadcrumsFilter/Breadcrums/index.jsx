/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumsItem from './BreadcrumsItem/BreadcrumsItem';

import style from './breadcrums.module.scss';

function Breadcrums(props) {
  const { items } = props;
  return (
    <div className={style.breadcrumsCategory}>
      {items.map(item => (
        <BreadcrumsItem
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
}

Breadcrums.propTypes = {
  items: PropTypes.array,
};
Breadcrums.defaultProps = {};

export default Breadcrums;
