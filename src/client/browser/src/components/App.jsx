import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import '../../../../styles/index.scss';
import '../../../../styles/index.module.scss';

import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';

function AppLayout({ route }) {
  return (
    <div>
      <HeaderContainer />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {};
AppLayout.defaultProps = {};

export default AppLayout;
