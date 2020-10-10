import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Firebase setting
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from 'configs/firebase.config';

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
        <BrowserRouter>
          <WrapperPage />
        </BrowserRouter>
      </FirebaseAuthProvider>
    </Suspense>
  );
}

export default App;
