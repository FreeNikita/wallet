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
