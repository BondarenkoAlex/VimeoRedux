import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import Filter from '../../../components/BreadcrumsFilter/Filter';

class FilterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
        <Filter />
    );
  }
}

FilterContainer.propTypes    = {};
FilterContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
    bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
