import React, {
  Component,
  PropTypes,
} from 'react';

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

