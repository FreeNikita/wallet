import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://wallet-backend-v1.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
