/*
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/index.scss';

import Header from '../components/Header';
import Player from '../components/Player';
import BreadcrumsFilter from '../components/BreadcrumsFilter';
import Content from '../components/Content';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Player />
        <BreadcrumsFilter />
        <Content />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

*/

import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import '../../../../styles/index.scss';

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
