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
