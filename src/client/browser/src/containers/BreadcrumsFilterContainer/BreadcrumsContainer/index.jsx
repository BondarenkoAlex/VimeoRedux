/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import Breadcrums from '../../../components/BreadcrumsFilter/Breadcrums';
import { getBreadcrums } from '../../../selectors';
import { getParamsFromProps } from '../../../utils/getParams';

class BreadcrumsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    const { breadcrums } = this.props;
    const isBreadcrums = breadcrums === null;
    return ({
      true: (
        null),
      false: (
        <Breadcrums items={breadcrums} />),
    }[isBreadcrums]);
  }
}

BreadcrumsContainer.propTypes = {
  breadcrums: PropTypes.array,
};
BreadcrumsContainer.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  const params = getParamsFromProps(ownProps);
  const breadcrums = getBreadcrums(state, params);
  return ({
    breadcrums,
  });
};

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({}, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadcrumsContainer));
