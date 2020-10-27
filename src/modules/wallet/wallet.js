import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  number, objectOf, string,
} from 'prop-types';

export const Wallet = memo(({ data }) => {
  console.log('data', data);
  const { name, amount, currency } = data;
  return (
    <>
      <Grid item xs={3}>
        <Paper>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${amount} ${currency}`}
            </Typography>
          </CardContent>
        </Paper>
      </Grid>

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
