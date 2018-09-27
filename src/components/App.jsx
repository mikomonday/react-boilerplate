import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

// Components
import Test from './Test';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
);

export default hot(module)(App);
