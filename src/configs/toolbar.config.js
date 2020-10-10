import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';

export const toolbarContent = {
  main: [
    {
      type: 'home',
      Icon: () => <HomeIcon />,
    },
  ],
  second: [
    {
      type: 'profile',
      Icon: () => <SettingsIcon />,
    },
    {
      type: 'logout',
      Icon: () => <ExitToAppIcon />,
    },
  ],
};
