import React, { memo } from 'react';
import { Wallet } from 'modules/wallet';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Query } from 'API/graphql';
import Cookies from 'js-cookie';

export const WalletPage = memo(() => {
  const user_id = Cookies.get('user_id');
  const { id: wallet_id } = useParams();

  const { data: { getWallet } = {} } = useQuery(Query.GET_WALLET, {
    variables: { user_id, wallet_id },
  });

  if (!getWallet) return <div>Error</div>;

  return <Wallet data={getWallet} />;
});
