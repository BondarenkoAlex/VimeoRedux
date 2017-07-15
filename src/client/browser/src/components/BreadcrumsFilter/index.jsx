import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumsContainer from '../../containers/BreadcrumsFilterContainer/BreadcrumsContainer';
import FilterContainer from '../../containers/BreadcrumsFilterContainer/FilterContainer';

function BreadcrumsFilter(props) {
  return (
    <section className="breadcrums-filter clearfix">
      <div className="container">
        <div className="wrap-container clearfix">
          <BreadcrumsContainer />
          <FilterContainer />
        </div>
      </div>
    </section>
  );
}

BreadcrumsFilter.propTypes    = {};
BreadcrumsFilter.defaultProps = {};

export default BreadcrumsFilter;
