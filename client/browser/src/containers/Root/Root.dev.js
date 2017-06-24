import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import App from '../App';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
