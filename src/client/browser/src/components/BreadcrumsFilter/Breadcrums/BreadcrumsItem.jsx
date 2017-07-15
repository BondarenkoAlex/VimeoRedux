import React from 'react';
import PropTypes from 'prop-types';

function BreadcrumsItem(props) {
  return (
    <li className="breadcrums-items-container">
      <a href="#">Categories</a>
    </li>
  );
}

BreadcrumsItem.propTypes    = {};
BreadcrumsItem.defaultProps = {};

export default BreadcrumsItem;
