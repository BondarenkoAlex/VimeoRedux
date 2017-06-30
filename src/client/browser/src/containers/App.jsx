import React, {
  Component,
  PropTypes,
} from 'react';

import '../../../../styles/index.scss';
import '../../../../styles/style.css';

import HeaderContainer from './HeaderContainer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderContainer />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

