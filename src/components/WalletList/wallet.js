import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddIcon from '@material-ui/icons/Add';

import { wallet as pathWallet, walletAdd } from 'configs/routing.config';
import { Query } from 'API/graphql';
import { getIconTypesWallet } from 'constants/wallet';
import Cookies from 'js-cookie';

export const Wallet = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { pathname } = useLocation();
  const user_id = Cookies.get('user_id');
  const activeWallet = pathname.split('/')[2];

  const { data, refetch } = useQuery(Query.GET_ALL_WALLET, {
    variables: { user_id },
  });

  const handlerClick = useCallback((id) => {
    history.push(`${pathWallet}/${id}`);
  }, []);

  const handlerAddWallet = useCallback(() => {
    history.push(walletAdd);
  }, []);

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
                {getIconTypesWallet(isActive)[type]}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}

        <ListItem button onClick={handlerAddWallet}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={t('wallet.addNew')} />
        </ListItem>

      </List>
    </>
  );
};
