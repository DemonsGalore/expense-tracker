import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import Categories from './pages/Categories';
import CreateParentCategory from './pages/CreateParentCategory';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Typography variant="h3">Expense Tracker</Typography>
      <Categories />
      <CreateParentCategory />
    </ApolloProvider>
  );
};

export default App;
