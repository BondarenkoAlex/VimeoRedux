import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumsItem from './BreadcrumsItem';

function Breadcrums(props) {
  return (
    <ul className="breadcrums-category clearfix">
      <BreadcrumsItem />
    </ul>
  );
}

Breadcrums.propTypes    = {};
Breadcrums.defaultProps = {};

export default Breadcrums;
