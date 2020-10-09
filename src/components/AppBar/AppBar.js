import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { login as pathLogin } from 'configs/routing.config';
import { auth } from 'configs/login.config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBar = memo(() => {
  const classes = useStyles();
  const history = useHistory();

  const login = () => history.push(pathLogin);
  const logout = () => auth().signOut();

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => (
        <Header position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              Wallet
            </Typography>

            <Button color="inherit" onClick={isSignedIn ? logout : login}>
              { isSignedIn ? 'Logout' : 'Login' }
            </Button>

          </Toolbar>
        </Header>
      )}
    </FirebaseAuthConsumer>
  );
});

AppBar.displayName = 'AppBar';
