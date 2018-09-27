/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';

// Reducer
import reducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState = {}) => createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(),
  ),
);

export default configureStore;
