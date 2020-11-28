import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './App';

import { client } from "./apollo";


render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
