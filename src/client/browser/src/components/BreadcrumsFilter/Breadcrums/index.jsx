/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumsItem from './BreadcrumsItem';

function Breadcrums(props) {
  const { items } = props;
  return (
    <ul className="breadcrums-category clearfix">
      {items.map(item => (
        <BreadcrumsItem
          key={item.title}
          item={item}
        />
      ))}
    </ul>
  );
}

Breadcrums.propTypes = {
  items: PropTypes.array,
};
Breadcrums.defaultProps = {};

export default Breadcrums;
