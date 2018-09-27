import types from './types';

const changeUser = newUser => ({
  type: types.changeUser,
  payload: ({ newUser }),
});

export default {
  changeUser,
};
