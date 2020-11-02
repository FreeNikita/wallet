import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { currencies, typesWallet } from 'constants/wallet';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';
import { Mutation, Query } from 'API/graphql';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { REMOVE_WALLET } from 'API/graphql/mutation';
import { wallet as pathWallet } from 'configs/routing.config';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    gridGap: theme.spacing(6),
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(3),
    display: 'grid',
    gridGap: theme.spacing(2),
  },

  buttonRemove: {
    color: 'red',
    minWidth: '250px',
  },
}));

export const Setting = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const [updateWallet] = useMutation(Mutation.UPDATE_WALLET);
  const [removeWallet] = useMutation(Mutation.REMOVE_WALLET);
  const { t } = useTranslation();
  const [{
    walletName, type,
  }, setValue] = useState({
    walletName: data.name,
    type: data.type,
  });
  const user_id = Cookies.get('user_id');

  const handleChange = ({ target: { name, value } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const send = () => {
    updateWallet({
      variables: {
        user_id,
        wallet_id: data.id,
        name: walletName,
        type,
      },
      refetchQueries: [
        {
          query: Query.GET_ALL_WALLET,
          variables: { user_id },
        },
        {
          query: Query.GET_WALLET,
          variables: { user_id, wallet_id: data.id },
        },
      ],
    });
  };

  const remove = () => {
    removeWallet({
      variables: {
        user_id,
        wallet_id: data.id,
      },
      refetchQueries: [
        {
          query: Query.GET_ALL_WALLET,
          variables: { user_id },
        },
      ],
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <Paper elevation={3} className={classes.card}>
          <Typography variant="h5" component="h2" center>
            Change Form
          </Typography>
          <TextField
            required
            id="name"
            name="walletName"
            label="Name"
            value={walletName}
            onChange={handleChange}
          />
          <TextField
            id="type"
            select
            name="type"
            label="Type"
            value={type}
            onChange={handleChange}
            helperText="Please select type"
          >
            {typesWallet.map((value) => (
              <MenuItem key={value} value={value}>
                {t(`wallet.${value}`)}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" color="primary" onClick={send}>
            Update
          </Button>

        </Paper>

        <Button
          className={classes.buttonRemove}
          onClick={remove}
        >
          Remove Card
        </Button>
      </Grid>
    </>
  );
};
