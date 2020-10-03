import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {AppBar} from 'components/AppBar';

import {Router} from 'conteiners/routing/Routing';
import './i18n';

/**
 * Main function for start
 * @return {function} The sum of the two numbers.
 */
function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <AppBar/>
        <Container>
          <Router/>
        </Container>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
