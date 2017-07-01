import React, {
  Component,
  PropTypes,
} from 'react';

import '../../../../styles/index.scss';
import '../../../../styles/style.css';

import HeaderContainer from './HeaderContainer';
import PlayerContainer from './PlayerContainer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <PlayerContainer />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

