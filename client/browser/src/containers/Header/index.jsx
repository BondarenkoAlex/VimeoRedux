import React, {
  Component,
  PropTypes,
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderComponent from '../../components/Header';

class Header extends Component {
  render() {
    return (
      <HeaderComponent />
    );
  }
}

Header.propTypes    = {};
Header.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
