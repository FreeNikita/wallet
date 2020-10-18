import React, { useEffect } from 'react';
import { useUser } from 'reactfire';
import { makeStyles } from '@material-ui/core/styles';
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
    padding: theme.spacing(3),
  },
}));

export const WrapperPage = () => {
  const classes = useStyles();
  const user = useUser();
  const { uid } = user || {};

  const { loading, error, data } = useQuery(Query.SET_USER, {
    variables: { firebase_id: uid },
    fetchPolicy: 'user',
  });

  useEffect(() => {
    if (data) {
      Cookies.set('user_id', data.setUser.id, { expires: 7 });
    }
  }, [data]);

  return (
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
  );
};
