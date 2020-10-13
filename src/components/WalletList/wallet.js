import React, { useCallback, useMemo, useState } from 'react';

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
import { useHistory } from 'react-router-dom';
import { wallet as pathWallet } from 'configs/routing.config';

const icon = (active) => ({
  bank: <AccountBalanceIcon color={active ? 'primary' : 'inherit'} />,
  wallet: <AccountBalanceWalletIcon color={active ? 'primary' : 'inherit'} />,
  card: <CreditCardIcon color={active ? 'primary' : 'inherit'} />,
});

const test = [
  {
    id: 1,
    name: 'UAH',
    active: false,
    type: 'bank',
  },
  {
    id: 2,
    name: 'UAH',
    active: false,
    type: 'wallet',
  },
  {
    id: 3,
    name: 'USD',
    active: true,
    type: 'wallet',
  },
  {
    id: 4,
    name: 'EUR',
    active: false,
    type: 'card',
  },
  {
    id: 5,
    name: 'Deposit',
    active: false,
    type: 'bank',
  },
];

export const Wallet = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [activeWallet, setActiveWallet] = useState(2);

  const handlerClick = useCallback((id) => {
    setActiveWallet(id);
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
        {test.map(({
          id, name, active, type,
        }) => (
          <ListItem
            selected={id === activeWallet}
            // selected={active}
            onClick={() => handlerClick(id)}
            button
            key={id}
          >
            <ListItemIcon>
              {icon(id === activeWallet)[type]}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}

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
