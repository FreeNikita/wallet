import { gql } from '@apollo/client';

export const CREATE_WALLET = gql`
  mutation CreateWallet(
    $user_id: String!,
    $name: String!,
    $amount: Int!,
    $currency: String!,
    $type: String!
  ) {
    createWallet(
        user_id: $user_id,
        name: $name,
        amount: $amount,
        currency: $currency,
        type: $type
    ){
        id
    }
  }
`;

export const UPDATE_WALLET = gql`
  mutation UpdateWallet(
    $user_id: String!,
    $wallet_id: String!,
    $name: String!,
    $type: String!
  ) {
    updateWallet(
        user_id: $user_id,
        name: $name,
        wallet_id: $wallet_id,
        type: $type
    ){
        id
    }
  }
`;

export const REMOVE_WALLET = gql`
  mutation RemoveWallet(
    $user_id: String!,
    $wallet_id: String!,
  ) {
    removeWallet(
        user_id: $user_id,
        wallet_id: $wallet_id,
    ){
        id
    }
  }
`;
