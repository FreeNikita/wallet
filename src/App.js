import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Firebase setting
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import { firebaseConfig } from 'configs/firebase.config';
import 'firebase/auth';

import { WrapperPage } from 'conteiners/wrapperPage';
import './i18n';

/**
 * Main function for start
 * @return {function} The sum of the two numbers.
 */
function App() {
  return (
    <Suspense fallback="loading">
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
          <BrowserRouter>
            <WrapperPage />
          </BrowserRouter>
        </FirebaseDatabaseProvider>
      </FirebaseAuthProvider>
    </Suspense>
  );
}

export default App;
