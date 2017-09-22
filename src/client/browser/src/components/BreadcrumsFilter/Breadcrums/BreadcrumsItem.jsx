/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BreadcrumsItem(props) {
  const { item } = props;
  return (
    <li className="breadcrums-items-container">
      <Link to={item.uri}>
        {item.title}
      </Link>
    </li>
  );
}

BreadcrumsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
BreadcrumsItem.defaultProps = {};

export default BreadcrumsItem;
