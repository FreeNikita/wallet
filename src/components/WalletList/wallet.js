import React, { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AddIcon from '@material-ui/icons/Add';

import { useTranslation } from 'react-i18next';
import { wallet as pathWallet } from 'configs/routing.config';

const icon = (active) => ({
  bank: <AccountBalanceIcon color={active ? 'primary' : 'inherit'} />,
  wallet: <AccountBalanceWalletIcon color={active ? 'primary' : 'inherit'} />,
  card: <CreditCardIcon color={active ? 'primary' : 'inherit'} />,
});

const GetAllWallets = gql`
  query GetAllWallets($user_id: String) {
    getAllWallets(user_id: $user_id){
      id
      name
      amount
      currency
      type
    }
  }
`;

export const Wallet = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { pathname } = useLocation();

  const activeWallet = pathname.split('/')[2];

  const { loading, error, data } = useQuery(GetAllWallets, {
    variables: { user_id: '5f8b5b781f21120c37a00f06' },
  });

  const handlerClick = useCallback((id) => {
    history.push(`${pathWallet}/${id}`);
  }, [history]);

  const title = useMemo(() => (
    <ListSubheader component="div" id="nested-list-subheader">
      {t('wallet.toolbarTitle')}
    </ListSubheader>
  ), [t]);

  return (
    <>
      <Divider />
      <List
        subheader={title}
      >
        {data && data.getAllWallets.map(({
          id, name, type,
        }) => {
          const isActive = id === activeWallet;
          return (
            <ListItem
              selected={isActive}
              onClick={() => handlerClick(id)}
              button
              key={id}
            >
              <ListItemIcon>
                {icon(isActive)[type]}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}

        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={t('wallet.addNew')} />
        </ListItem>

      </List>
    </>
  );
};
