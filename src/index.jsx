import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Components
import App from './components/App';

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

// Hot Loader
/* eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
    render(require('./components/App'));
  });
}
/* eslint-enable */
