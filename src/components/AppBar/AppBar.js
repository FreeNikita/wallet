import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '@material-ui/core/AppBar';
import {UserContext} from '../../contexts/user/userContext';

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


export const AppBar = () => {
  const {logoutUser, user} = useContext(UserContext);
  console.log('user', user);
  const classes = useStyles();

  return (
    <Header position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          ASD
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <Link to="/">
                    Home
          </Link>
        </Typography>


        <Button color="inherit">
          <Link to="/login">
            {user ? 'Logout' : 'Login' }
          </Link>
        </Button>

      </Toolbar>
    </Header>
  );
};
