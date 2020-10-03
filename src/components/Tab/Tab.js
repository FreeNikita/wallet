import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginBottom: theme.spacing(2),
  },
}));

export const CustomTeb = ({tabs = [], content = []}) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

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
        {tabs.map((title) => <Tab label={title} key={title} />)}
      </Tabs>

      { content[tab]() }
    </Fragment>
  );
};
