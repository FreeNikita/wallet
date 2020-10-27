import { gql } from '@apollo/client';

export const GET_ALL_WALLET = gql`
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

export const SET_USER = gql`
  query SetUser($firebase_id: String!) {
    setUser(firebase_id: $firebase_id){
        firebase_id
        id
    }
  }
`;

export const GET_WALLET = gql`
    query GetWallet($user_id: String!, $wallet_id: String!) {
        getWallet(
            user_id: $user_id
            wallet_id: $wallet_id
        ){
            id
            user_id
            name
            amount
            currency
            type
        }
    }
`;
