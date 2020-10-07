import React, {useReducer, useEffect, useState} from 'react';
import {UserContext} from './userContext';
import {userReducer} from './userReducer';
import {USER_LOGOUT, USER_LOGIN} from './type';
import {signGoogle} from 'modules/firebase';

export const UserState = ({children}) => {
  const [loginType, setLoginType] = useState(null);
  const [state, dispatch] = useReducer(userReducer, null);

  const loginUser = (user) => dispatch({type: USER_LOGIN, payload: user});
  const logoutUser = () => dispatch({type: USER_LOGOUT});

  useEffect(() => {
    async function fetchMyAPI() {
      const {user, accessToken} = await signGoogle();
      console.log('user', user);
      loginUser(user);
      setLoginType(null);
    }

    if (loginType) {
      fetchMyAPI();
    }
  }, [loginType]);

  return (
    <UserContext.Provider
      value={{
        user: state,
        loginUser,
        logoutUser,
        setLoginType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
