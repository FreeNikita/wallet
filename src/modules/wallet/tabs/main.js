import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const Main = ({data}) => {
  const { name, amount, currency } = data;
  return (
      <>
    {/*<Paper>*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
           {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           {`${amount} ${currency}`}
        </Typography>
      </CardContent>
    {/*</Paper>*/}
          </>
  );
};
