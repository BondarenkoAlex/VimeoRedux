import React, {
  Component,
  PropTypes,
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';

class HeaderContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Header />
    );
  }
}

HeaderContainer.propTypes    = {};
HeaderContainer.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
