import React, {Fragment, useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginBottom: theme.spacing(2),
  },
}));

export const CustomTab = ({tabs = [], content = []}) => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const Content = content[tab];

  return (
    <Fragment>
      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        indicatorColor="primary"
        textColor="primary"
        centered
        className={classes.tabs}
      >
        {tabs.map(({title, disabled}) => <Tab label={title} key={title} disabled={disabled}/>)}
      </Tabs>
      <Content />
    </Fragment>
  );
};
