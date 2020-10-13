import React from 'react';
import { useParams } from 'react-router-dom';

export const WalletPage = () => {
  const { id } = useParams();
  return (
    <div>
      WalletPage
      {id}
    </div>
  );
};
