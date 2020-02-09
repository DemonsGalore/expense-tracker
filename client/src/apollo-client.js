import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const uri = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  cache,
  uri
});

export default client;
