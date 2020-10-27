import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const bankType = 'bank';
const walletType = 'wallet';
const cardType = 'card';

export const typesWallet = [walletType, bankType, cardType];

export const currencies = ['UAH', 'USD', 'EUR', 'PLN'];

export const getIconTypesWallet = (active) => ({
  bank: <AccountBalanceIcon color={active ? 'primary' : 'inherit'} />,
  wallet: <AccountBalanceWalletIcon color={active ? 'primary' : 'inherit'} />,
  card: <CreditCardIcon color={active ? 'primary' : 'inherit'} />,
});
