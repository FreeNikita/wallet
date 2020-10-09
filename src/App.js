import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

// Firebase setting
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from 'configs/firebase.config';

// Component
import { AppBar } from 'components/AppBar';
import { Router } from 'conteiners/routing/Routing';

import './i18n';

/**
 * Main function for start
 * @return {function} The sum of the two numbers.
 */
function App() {
  return (
    <Suspense fallback="loading">
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <BrowserRouter>
          <AppBar />
          <Container>
            <Router />
          </Container>
        </BrowserRouter>
      </FirebaseAuthProvider>
    </Suspense>
  );
}

export default App;
