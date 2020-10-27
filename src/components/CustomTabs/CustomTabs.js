import React, { useState, memo, useMemo } from 'react';
import { elementType, arrayOf, instanceOf } from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './style';

export const CustomTabs = memo(({ tabs, content, props }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const Content = useMemo(() => content[tab], [tab, content]);

  return (
    <>
      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
        {...props}
      >
        {tabs.map(({ title, disabled }) => <Tab label={title} key={title} disabled={disabled} />)}
      </Tabs>
      <Content />
    </>
  );
});

CustomTabs.displayName = 'CustomTab';

CustomTabs.propTypes = {
  tabs: instanceOf(Array).isRequired,
  content: arrayOf(elementType).isRequired,
};
