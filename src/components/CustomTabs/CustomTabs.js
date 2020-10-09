import React, { useState, memo, useMemo } from 'react';
import { string, elementType, arrayOf } from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginBottom: theme.spacing(2),
  },
}));

export const CustomTabs = memo(({ tabs, content }) => {
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
        centered
        className={classes.tabs}
      >
        {tabs.map(({ title, disabled }) => <Tab label={title} key={title} disabled={disabled} />)}
      </Tabs>
      <Content />
    </>
  );
});

CustomTabs.displayName = 'CustomTab';

CustomTabs.propTypes = {
  tabs: arrayOf(string).isRequired,
  content: arrayOf(elementType).isRequired,
};
