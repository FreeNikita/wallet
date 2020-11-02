import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { InputNumber } from 'components/Inputs/InputNumber';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { Mutation, Query } from 'API/graphql';
import { typesWallet, currencies } from 'constants/wallet';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'grid',
    gridGap: theme.spacing(2),
  },
}));

export const AddWallet = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const [createWallet] = useMutation(Mutation.CREATE_WALLET);
  const [{
    walletName, amount, type, currency,
  }, setValue] = useState({
    walletName: '',
    amount: 0,
    currency: currencies[0],
    type: typesWallet[0],
  });

  const handleChange = ({ target: { name, value } }) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const send = () => {
    const user_id = Cookies.get('user_id');
    createWallet({
      variables: {
        user_id,
        name: walletName,
        amount: +amount,
        currency,
        type,
      },
      refetchQueries: [{
        query: Query.GET_ALL_WALLET,
        variables: { user_id },
      }],
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <TextField
        required
        id="name"
        name="walletName"
        label="Name"
        value={walletName}
        onChange={handleChange}
      />

      <TextField
        id="standard-select-currency"
        select
        name="currency"
        label="Currency"
        value={currency}
        onChange={handleChange}
        helperText="Please select your currency"
      >
        {currencies.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Amount"
        value={amount}
        onChange={handleChange}
        name="amount"
        id="amount"
        InputProps={{
          inputComponent: InputNumber,
        }}
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
        {t('form.create')}
      </Button>
    </Paper>
  );
};
