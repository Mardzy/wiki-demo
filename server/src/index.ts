import { ApolloServer } from 'apollo-server';

import { dataSources } from "./apis";
import { schema } from './schema';

const server = new ApolloServer({ dataSources, schema });

server
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
