import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from 'conteiners/routing/Routing';
import { AppBar } from 'components/AppBar';
import { ToolBar } from 'components/ToolBar';

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
