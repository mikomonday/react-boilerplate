import types from './types';

export default {
  changeUser: newUser => ({
    type: types.changeUser,
    payload: { newUser },
  }),
};
