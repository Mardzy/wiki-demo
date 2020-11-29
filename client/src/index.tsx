import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from "./apollo";

import App from './containers/App';

render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
