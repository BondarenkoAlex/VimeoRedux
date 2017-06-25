import React, {
  Component,
  PropTypes,
} from 'react';
import { Link,  } from 'react-router-dom';

class App2 extends Component {
  render() {
    return (
      <div><Link to={{
        pathname: '/hot',
        search: '?sort=name',
        hash: '#the-hash',
        state: { fromDashboard: true }
      }}>Link2</Link></div>
    );
  }
}

App2.propTypes    = {};
App2.defaultProps = {};

export default App2;
