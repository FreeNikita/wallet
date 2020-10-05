import React, {useReducer} from 'react';
import {UserContext} from './userContext';
import {userReducer} from './userReducer';
import {USER_LOGOUT, USER_LOGIN} from './type';

export const UserState = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, null);

  const loginUser = (user) => dispatch({type: USER_LOGIN, payload: user});
  const logoutUser = () => dispatch({type: USER_LOGOUT});

  return (
    <UserContext.Provider
      value={{
        user: state,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
