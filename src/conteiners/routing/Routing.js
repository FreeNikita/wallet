import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { router, home, login } from 'configs/routing.config';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

export const Router = () => (
  <FirebaseAuthConsumer>
    {(isSignedIn) => (
      <Switch>
        {
          router.map(({
            page: Page, path, exact, isPrivate,
          }) => (
            <Route path={path} exact={exact} key={path}>
              { !isPrivate && <Page /> }
              { isPrivate && isSignedIn ? <Page /> : <Redirect to={login} /> }
            </Route>
          ))
        }
        <Redirect to={isSignedIn ? home : login} />
      </Switch>
    )}
  </FirebaseAuthConsumer>
);
