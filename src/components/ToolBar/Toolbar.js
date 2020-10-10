import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

// Material
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Config
import { auth } from 'configs/login.config';
import { toolbarContent } from 'configs/toolbar.config';
import { home as pathHome, profile as pathProfile } from 'configs/routing.config';

import { useStyles } from './style';

export const ToolBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { main, second } = toolbarContent;

  const handlers = {
    logout: useCallback(() => auth().signOut(), []),
    profile: useCallback(() => history.push(pathProfile), [history]),
    home: useCallback(() => history.push(pathHome), [history]),
  };

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContent}>
            <div className={classes.drawerContainer}>
              <List>
                {main.map(({ type, Icon }) => (
                  <ListItem button onClick={handlers[type]} key={type}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={type} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              {isSignedIn && (
                <List>
                  {second.map(({ type, Icon }) => (
                    <ListItem button onClick={handlers[type]} key={type}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={type} />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </div>
        </Drawer>
      )}
    </FirebaseAuthConsumer>
  );
};
