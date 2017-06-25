import React, {
  Component,
  PropTypes,
} from 'react';
import { Link,  } from 'react-router-dom';

import '../../../../styles/style.css';
import img from '../logo.svg';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Link to={{
          pathname: '/courses',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true }
        }}>Link</Link>

        <div className="App-header">
          <h2>Welcome to React 19 </h2>
          <img src={img} />
          {}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

