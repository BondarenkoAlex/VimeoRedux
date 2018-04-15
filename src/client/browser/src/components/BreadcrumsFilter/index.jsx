import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumsContainer from '../../containers/BreadcrumsFilterContainer/BreadcrumsContainer';
import FilterContainer from '../../containers/BreadcrumsFilterContainer/FilterContainer';
import style from './breadcrums-filter.module.scss';

function BreadcrumsFilter(props) {
  return (
    <section className={style.breadcrumsFilter}>
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
