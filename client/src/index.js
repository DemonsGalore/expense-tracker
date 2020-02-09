import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store';
import client from './apollo-client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
