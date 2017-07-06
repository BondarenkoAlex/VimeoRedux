import React, {
  PropTypes,
} from 'react';
import { renderRoutes } from 'react-router-config';

import '../../../../../styles/index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function AppLayout({ route }) {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {};
AppLayout.defaultProps = {};

export default AppLayout;