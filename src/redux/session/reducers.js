import { combineReducers } from 'redux';
import types from './types';

const user = (state = '', action) => {
  switch (action.type) {
    case types.changeUser:
      return action.payload.newUser;

    default:
      return state;
  }
};

export default combineReducers({
  user,
});
