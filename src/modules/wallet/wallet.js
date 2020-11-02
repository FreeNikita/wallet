import React, { memo } from 'react';
import { number, objectOf, string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { CustomTabs } from 'components/CustomTabs';
import {
  Main, Graph, History, Setting,
} from './tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export const Wallet = memo(({ data }) => {
  const classes = useStyles();
  const { name, amount, currency } = data;

  const tabs = [
    { title: 'Main Info' },
    { title: 'History' },
    { title: 'Graph' },
    { title: 'Setting' },
  ];

  return (
    <>
      {/* <Grid container spacing={3}> */}
      {/*  <Grid item xs={12}> */}
      <CustomTabs
        tabs={tabs}
        content={[
          () => <Main data={data} />,
          () => <History data={data.history} />,
          () => <Graph />,
          () => <Setting data={data} />,
        ]}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      />
      {/* </Grid> */}
      {/* </Grid> */}
    </>
  );
});

Wallet.displayName = 'Wallet';

Wallet.propTypes = {
  data: objectOf({
    id: string,
    user_id: string,
    name: string,
    amount: number,
    currency: string,
    type: string,
  }).isRequired,
};
