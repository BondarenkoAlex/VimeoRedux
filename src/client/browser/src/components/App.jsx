import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { renderRoutes } from "react-router-config";

import "../../../../styles/index.scss";
import "../../../../styles/index.module.scss";

import HeaderContainer from "../containers/HeaderContainer";
import Footer from "../components/Footer";
import {
  initEnvironmentAction,
  resolutionAction
} from "../actions/environmentActions";

class AppLayout extends Component {
  constructor(props, context) {
    super(props, context);
    this.onResize = this.onResize.bind(this);
  }

  componentWillMount() {
    this.props.initEnvironmentAction();
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.props.resolutionAction();
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
  initEnvironmentAction: PropTypes.func,
  resolutionAction: PropTypes.func
};
AppLayout.defaultProps = {};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initEnvironmentAction,
      resolutionAction
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(AppLayout);
