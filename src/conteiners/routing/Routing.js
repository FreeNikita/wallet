import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {router, home, login} from 'constants/routing.config';

export const Router = () => {
  const isAuth = true;

  return (
    <Switch>
      {
        router.map(({page: Page, path, exact, isPrivate}) => (
          <Route path={path} exact={exact} key={path}>
            { !isPrivate && <Page /> }
            { isPrivate && isAuth ? <Page /> : <Redirect to={login} /> }
          </Route>
        ))
      }
      <Redirect to={isAuth ? home : login}/>
    </Switch>
  );
};
