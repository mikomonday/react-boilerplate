import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

// Components
import App from './components/App';

// Redux
const store = configureStore();

const root = document.createElement('main');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
