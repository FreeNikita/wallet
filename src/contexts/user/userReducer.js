import {USER_LOGIN, USER_LOGOUT} from './type';

const handlers = {
  [USER_LOGIN]: (state, payload) => payload,
  [USER_LOGOUT]: (state, payload) => null,
  DEFAULT: (state) => state,
};

export const userReducer = (state, action) => {
  const handler = handlers[action.type] || handlers['DEFAULT'];
  return handler(state, action.payload);
};
