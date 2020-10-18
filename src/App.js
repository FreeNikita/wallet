import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
// Firebase setting
import { FirebaseAppProvider } from 'reactfire';

import { firebaseConfig } from 'configs/firebase.config';
import 'firebase/auth';

import { client } from 'configs/graphQL.config';
import { WrapperPage } from 'conteiners/wrapperPage';
import './i18n';

/**
 * Main function for start
 * @return {function} The sum of the two numbers.
 */
function App() {
  return (
    <Suspense fallback="loading">
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <WrapperPage />
          </BrowserRouter>
        </ApolloProvider>
      </FirebaseAppProvider>
    </Suspense>
  );
}

export default App;
