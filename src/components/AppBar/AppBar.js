import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

// Material
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

// Config
import { login as pathLogin, home as pathHome } from 'configs/routing.config';

import { useStyles } from './style';

export const AppBar = memo(() => {
  const classes = useStyles();
  const history = useHistory();

  const login = useCallback(() => history.push(pathLogin), [history]);
  const home = useCallback(() => history.push(pathHome), [history]);

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => (
        <Header position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title} onClick={home}>
              Wallet
            </Typography>
            {!isSignedIn && <Button color="inherit" onClick={login}> Login</Button> }
          </Toolbar>
        </Header>
      )}
    </FirebaseAuthConsumer>
  );
});

AppBar.displayName = 'AppBar';
