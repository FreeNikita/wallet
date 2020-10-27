import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { router, home, login } from 'configs/routing.config';
import { useUser } from 'reactfire';

export const Router = () => {
  const user = useUser();

  return (
    <Switch>
      {router.map(({
        page: Page, path, exact, isPrivate,
      }) => (
        <Route path={path} exact={exact} key={path}>
          { !isPrivate && <Page /> }
          { isPrivate && user ? <Page /> : <Redirect to={login} /> }
        </Route>
      ))}
      <Redirect to={user ? home : login} />
    </Switch>
  );
};
