import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '@material-ui/core/AppBar';

export const AppBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <MenuIcon />*/}
        </IconButton>
        <Link to="/">
          <Typography variant="h6">
                        Home
          </Typography>
        </Link>

        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>

      </Toolbar>
    </Header>
  );
};
