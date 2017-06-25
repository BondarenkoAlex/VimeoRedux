import React, {
  Component,
  PropTypes,
} from 'react';

import '../../../../styles/app.css';

import Header from './Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        [Привет]
        <Header />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

