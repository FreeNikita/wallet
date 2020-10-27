import React, { useEffect } from 'react';
import { useUser } from 'reactfire';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from 'conteiners/routing/Routing';
import { AppBar } from 'components/AppBar';
import { ToolBar } from 'components/ToolBar';
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { Query } from 'API/graphql';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5393ff',
      main: '#2979ff',
      dark: '#1c54b2',
      contrastText: '#000',
    },
  },
});

export const WrapperPage = () => {
  const classes = useStyles();
  const { uid: firebase_id } = useUser() || {};

  const { error, data: { setUser } = {} } = useQuery(Query.SET_USER, {
    variables: { firebase_id },
  });

  useEffect(() => {
    if (setUser) Cookies.set('user_id', setUser.id, { expires: 1 });
    if (error) Cookies.remove('user_id');
  }, [setUser, error]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />
        <ToolBar />
        <main className={classes.content}>
          <Toolbar />
          <Container>
            <Router />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};
