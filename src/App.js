import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/app';
import Container from '@material-ui/core/Container';
import {AppBar} from 'components/AppBar';
import {UserState} from 'contexts/user/userState';
import {Router} from 'conteiners/routing/Routing';
import {firebaseConfig} from 'constants/firebase.config';
import './i18n';

firebase.initializeApp(firebaseConfig);

/**
 * Main function for start
 * @return {function} The sum of the two numbers.
 */
function App() {
  return (
    <Suspense fallback="loading">
      <UserState>
        <BrowserRouter>
          <AppBar/>
          <Container>
            <Router/>
          </Container>
        </BrowserRouter>
      </UserState>
    </Suspense>
  );
}

export default App;
