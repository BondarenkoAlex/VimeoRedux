/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './breadcrums-item.module.scss';

function BreadcrumsItem(props) {
  const { item } = props;
  return (
    <div className={style.breadcrumsItem}>
      <Link
        className={style.breadcrumsItemLink}
        to={item.uri}
      >
        {item.title}
      </Link>
    </div>
  );
}

BreadcrumsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
BreadcrumsItem.defaultProps = {};

export default BreadcrumsItem;
