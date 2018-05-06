import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderRoutes } from 'react-router-config';

import '../../../../styles/index.scss';
import '../../../../styles/index.module.scss';

import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';
import { initEnvironment } from '../actions/environmentActions';

class AppLayout extends Component {

  componentWillMount() {
    this.props.initEnvironment();
  }

  render() {
    const { route } = this.props;
    return (
      <div>
        <HeaderContainer />
        {renderRoutes(route.routes)}
        <Footer />
      </div>
    );
  }
}

AppLayout.propTypes = {
  route: PropTypes.object,
};
AppLayout.defaultProps = {};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    initEnvironment,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(AppLayout);
