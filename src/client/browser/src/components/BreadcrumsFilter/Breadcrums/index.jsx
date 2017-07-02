import React, {
  PropTypes,
} from 'react';
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
